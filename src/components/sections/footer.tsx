import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="container mx-auto mt-8 text-xs font-medium text-foreground">
      <div className="flex flex-col items-center justify-between py-8 border-t border-input md:flex-row md:space-y-0 space-y-4">
        <p>
          © 2022 - {new Date().getFullYear().toString()},
          <a
            className="font-bold text-foreground"
            href="https://github.com/samuelmteixeira"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            @SamuelMTeixeira.
          </a>
        </p>

        <Image
          src="/logo.webp"
          width={32}
          height={32}
          alt="Website logo"
          className="hidden md:block w-6 h-6"
        />

        <p>Coded with 🧡 and ☕</p>
      </div>
    </footer>
  )
}
