module.exports = {
  hooks: {
    readPackage(pkg, context) {
      // Fix for Next.js requiring @swc/helpers but not declaring it
      if (pkg.name === 'next') {
        pkg.dependencies = pkg.dependencies || {};
        pkg.dependencies['@swc/helpers'] = '^0.5.17';
      }
      
      // Fix for @internationalized/date requiring @swc/helpers
      if (pkg.name === '@internationalized/date') {
        pkg.dependencies = pkg.dependencies || {};
        pkg.dependencies['@swc/helpers'] = '^0.5.17';
      }
      
      return pkg;
    }
  }
};
