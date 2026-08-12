import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/companyData';
import { ProductItem } from '../types';
import {
  Package,
  CheckCircle2,
  ChevronRight,
  Maximize2,
  X,
  FileSpreadsheet,
  Send,
  Layers,
  Wrench,
  Sparkles
} from 'lucide-react';

interface ProductsShowcaseProps {}

export const ProductsShowcase: React.FC<ProductsShowcaseProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  const categories = [
    { id: 'all', label: '전체 제품군' },
    { id: 'headliner', label: 'Head-Lining Module' },
    { id: 'nvh', label: 'NVH 흡음/차음 부직포' },
    { id: 'trim', label: '내장 트림류 (Trim)' },
    { id: 'electronic', label: '가전/전자부품 Seal' },
  ];

  const filteredProducts = PRODUCTS_DATA.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="products" className="py-24 bg-slate-900 text-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Package className="w-3.5 h-3.5" />
            <span>PRODUCTS & TECHNOLOGIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            주요 제품 및 기술 (Products)
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            (주)케이앤에스의 정밀 기술력과 엄격한 품질관리를 거쳐 생산되는 <br className="hidden sm:inline" />
            자동차 내장재 및 고성능 부직포 부품 라인업입니다.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                id={`product-cat-${cat.id}`}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-slate-800/60 border border-slate-700/80 hover:border-blue-500/60 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 group flex flex-col justify-between"
            >
              <div>
                {/* Product Image Header */}
                <div className="relative h-64 overflow-hidden bg-slate-950">
                  <img
                    src={product.image}
                    alt={product.koreanName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

                  {product.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-blue-600 shadow-md">
                      {product.badge}
                    </span>
                  )}

                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/80 text-slate-300 hover:text-white backdrop-blur-md hover:bg-blue-600 transition-colors"
                    title="상세 스펙 확대 보기"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[11px] font-mono text-blue-400 uppercase tracking-widest block">
                      {product.name}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white">
                      {product.koreanName}
                    </h3>
                  </div>
                </div>

                {/* Product Description Body */}
                <div className="p-6 space-y-4">
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      주요 특장점 (Key Features)
                    </span>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {product.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-700/50 mt-4 flex items-center justify-end">
                <button
                  onClick={() => setActiveModalProduct(product)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center gap-1.5"
                >
                  <span>상세 스펙 보기</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl space-y-6">
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                K&amp;S
              </div>
              <div>
                <span className="text-xs text-blue-400 font-mono uppercase">{activeModalProduct.name}</span>
                <h3 className="text-2xl font-extrabold text-white">{activeModalProduct.koreanName}</h3>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-56 bg-slate-950">
              <img
                src={activeModalProduct.image}
                alt={activeModalProduct.koreanName}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">제품 개요</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{activeModalProduct.description}</p>
            </div>

            {/* Spec Table */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <FileSpreadsheet className="w-4 h-4 text-blue-400" />
                <span>기술 규격 사양 (Specifications)</span>
              </h4>
              <div className="border border-slate-800 rounded-xl overflow-hidden text-xs">
                {Object.entries(activeModalProduct.specs).map(([key, val], idx) => (
                  <div
                    key={key}
                    className={`flex items-center justify-between p-3 ${
                      idx % 2 === 0 ? 'bg-slate-800/60' : 'bg-slate-900'
                    }`}
                  >
                    <span className="text-slate-400 font-medium">{key}</span>
                    <span className="text-slate-100 font-semibold">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">적용 차종 및 분야</h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProduct.applications.map((app, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-blue-950/60 border border-blue-800/80 text-blue-300 text-xs font-medium"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveModalProduct(null)}
                className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
