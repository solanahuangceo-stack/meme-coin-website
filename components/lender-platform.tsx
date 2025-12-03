import Image from 'next/image';
import { Platform } from './lenders';
import Link from 'next/link';

interface LenderPlatformProps {
  index: number;
  viewMode: 'grid' | 'list';
  platform: Platform;
}
export default function LenderPlatform({ index, viewMode, platform }: LenderPlatformProps) {
  const disabled = true;
  return (
    <Link
      href={platform.url as string}
      target="_blank"
      rel="noopener noreferrer"
      key={index}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-purple-500/30 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-none transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20"
    >
      {disabled && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 text-center text-sm font-medium text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          <p className="text-xl">Coming Soon!</p>
        </div>
      )}
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-linear-to-r from-purple-500/0 via-cyan-500/0 to-blue-500/0 transition-all duration-300 group-hover:from-purple-500/5 group-hover:via-cyan-500/5 group-hover:to-blue-500/5" />

      <div className={`relative flex items-center ${viewMode === 'grid' ? 'p-6' : 'p-4'} gap-4`}>
        <Image
          src={platform.img || '/platforms/default.webp'}
          alt={platform.name}
          width={48}
          height={48}
          //   className="size-16 rounded-lg border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 transition-all duration-300 group-hover:border-cyan-400/50"
        />

        {/* Platform Name */}
        <div className="flex-1">
          <h3 className="text-xl font-bold tracking-wide text-white">{platform.name}</h3>
          <span className="text-xs tracking-wider text-gray-400 uppercase">{platform.category}</span>
        </div>

        {/* Arrow indicator */}
        <div className="opacity-0 transition-opacity group-hover:opacity-100">
          <svg className="h-6 w-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
