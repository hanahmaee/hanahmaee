"use client";
import { useState } from "react";
import { TEST_PLANS } from "@/app/Portfolio/portfolioConst";
import PdfModal from "@/components/PdfModal";

export default function TestPlans() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  return (
    <main className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold mb-10 text-center">System Test Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TEST_PLANS.map((plan, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedPdf(plan.pdf)}
            className="cursor-pointer border rounded-xl shadow-lg overflow-hidden bg-white dark:bg-[#1a1a1a] hover:shadow-2xl transition duration-300"
          >
            <img src={plan.image} alt={plan.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-sm opacity-80 mb-2">{plan.description}</p>
              <p className="text-xs text-gray-500">{plan.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for PDF viewing */}
      {selectedPdf && (
        <PdfModal isOpen={true} pdfUrl={selectedPdf} onClose={() => setSelectedPdf(null)} />
      )}
    </main>
  );
}
