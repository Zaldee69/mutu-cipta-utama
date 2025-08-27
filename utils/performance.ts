import { onCLS, onINP, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

// Function to send web vitals to analytics service
function sendToAnalytics(metric: Metric) {
  // Replace with your analytics service (Google Analytics, Vercel Analytics, etc.)
  console.log('Web Vital:', metric);
  
  // Example for Google Analytics
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-ignore
    window.gtag('event', metric.name, {
      custom_parameter_1: Math.round(metric.value),
      custom_parameter_2: metric.rating,
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.value),
      non_interaction: true,
    });
  }
}

// Initialize web vitals measurement
export function initWebVitals() {
  onCLS(sendToAnalytics);
  onINP(sendToAnalytics); // INP (Interaction to Next Paint) replaces FID in newer versions
  onFCP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
}

// Performance utility functions
export const performance = {
  // Mark start of an operation
  mark: (name: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.performance.mark(name);
    }
  },
  
  // Measure duration between two marks
  measure: (name: string, startMark: string, endMark: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.performance.mark(endMark);
      window.performance.measure(name, startMark, endMark);
      
      const measures = window.performance.getEntriesByName(name);
      if (measures.length > 0) {
        const measure = measures[0] as PerformanceMeasure;
        console.log(`${name}: ${Math.round(measure.duration)}ms`);
        return measure.duration;
      }
    }
    return 0;
  },
  
  // Simple timing utility
  time: (name: string, fn: () => void | Promise<void>) => {
    const start = Date.now();
    performance.mark(`${name}-start`);
    
    const result = fn();
    
    if (result instanceof Promise) {
      return result.finally(() => {
        const end = Date.now();
        console.log(`${name}: ${end - start}ms`);
      });
    } else {
      const end = Date.now();
      console.log(`${name}: ${end - start}ms`);
      return result;
    }
  }
};
