import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '../app/ui/home.module.css';
import Image from 'next/image';
import { lusitana } from '../app/ui/fonts.js';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      Hey there! Welcome to my app.
    </main>
  );
}
