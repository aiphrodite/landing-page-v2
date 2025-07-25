import { Button } from "@heroui/react";
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='w-full text-white'
      style={{
        backgroundImage: 'url(/images/footer-bg.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='w-full h-full'
        style={{
          backgroundImage: 'url(/images/footer-overlay.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">
            <div className="sm:col-span-12 lg:col-span-3">
              <div className="mb-2">
                <Image src="/images/logo-full-white.svg" alt="aiphrodite logo" width={300} height={100} />
              </div>
              <div className="">
                <Link href="/terms" passHref>
                  <Button
                    variant="flat"
                    color="primary"
                    className="hover:text-gray-200"
                  >
                    Terms
                  </Button>
                </Link>
                <Link href="/privacy" passHref>
                  <Button
                    variant="flat"
                    color="primary"
                    className="hover:text-gray-200"
                  >
                    Privacy Policy
                  </Button>
                </Link>
                <Link href="/ai-governance" passHref>
                  <Button
                    variant="flat"
                    color="primary"
                    className="hover:text-gray-200"
                  >
                    AI Governance
                  </Button>
                </Link>
                <Link href="/investors" passHref>
                  <Button
                    variant="flat"
                    color="primary"
                    className="hover:text-gray-200"
                  >
                    Investor Relations
                  </Button>
                </Link>
              </div>
            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between py-4 md:py-8 text-gray-400">
            <div className="text-sm mr-4">&copy; aiphrodite.ai. All rights reserved.</div>
          </div>

        </div>
      </div>
    </footer>
  );
}
