"use client";

import { useState } from "react";
import { portfolioProjects, portfolioCategories, getProjectsByCategory } from "@/lib/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, MapPin, Calendar, Briefcase } from "lucide-react";

export function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState("Semua");
    const filteredProjects = getProjectsByCategory(selectedCategory);

    return (
        <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary/5 via-white to-primary/5 py-20 md:py-28 border-b">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary backdrop-blur-sm mb-6">
                            <Briefcase className="w-4 h-4 mr-2" />
                            Proyek Terpilih
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 mb-6 leading-tight">
                            Portofolio <span className="text-primary">Proyek Kami</span>
                        </h1>
                        <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
                            Pengalaman lebih dari 100+ proyek konsultasi lingkungan di berbagai sektor industri di seluruh Indonesia.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="bg-white border-b shadow-sm">
                <div className="container mx-auto px-4 md:px-6 py-4">
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {portfolioCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${selectedCategory === category
                                    ? "bg-primary text-white shadow-md"
                                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {filteredProjects.map((project) => (
                            <Card
                                key={project.id}
                                className="group hover:shadow-xl transition-all duration-300 border-zinc-100 overflow-hidden"
                            >
                                {/* Card Image/Gradient Placeholder */}
                                <div className="h-48 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                                    <div className="absolute top-4 right-4">
                                        <Badge className="bg-white/90 text-primary border-primary/20 backdrop-blur-sm">
                                            {project.category}
                                        </Badge>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex items-center gap-2 text-sm text-zinc-600">
                                            <Calendar className="w-4 h-4" />
                                            <span className="font-medium">{project.year}</span>
                                        </div>
                                    </div>
                                </div>

                                <CardHeader className="pb-3">
                                    <CardTitle className="text-xl font-bold text-zinc-900 group-hover:text-primary transition-colors line-clamp-2">
                                        {project.title}
                                    </CardTitle>
                                    <CardDescription className="flex flex-col gap-2 mt-2">
                                        <div className="flex items-center gap-2 text-sm text-zinc-600">
                                            <Building2 className="w-4 h-4 text-primary" />
                                            <span className="font-medium">{project.client}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-zinc-600">
                                            <MapPin className="w-4 h-4 text-primary" />
                                            <span>{project.location}</span>
                                        </div>
                                    </CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <p className="text-sm text-zinc-600 leading-relaxed line-clamp-3 mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant="outline"
                                                className="text-xs border-zinc-200 text-zinc-600"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-zinc-500 text-lg">Tidak ada proyek dalam kategori ini.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
