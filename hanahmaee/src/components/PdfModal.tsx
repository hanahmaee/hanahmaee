"use client";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function PdfModal({
  isOpen,
  onClose,
  pdfUrl
}: {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-4xl h-[80vh] bg-white rounded-lg shadow-xl overflow-hidden">
          <iframe src={pdfUrl} className="w-full h-full" />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
