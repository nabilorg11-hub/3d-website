'use client'

export function ScanAnimation() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Scanning line */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-scan" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-purple-500 animate-pulse" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-purple-500 animate-pulse" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-purple-500 animate-pulse" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-purple-500 animate-pulse" />

      {/* Scanning text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="glass px-6 py-3 rounded-full">
          <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 animate-pulse">
            Scanning...
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(600px);
          }
        }
        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }
        .bg-grid {
          background-image: linear-gradient(
              rgba(139, 92, 246, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(139, 92, 246, 0.1) 1px,
              transparent 1px
            );
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  )
}
