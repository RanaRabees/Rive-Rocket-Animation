import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Rive - Rocket - Assignment',
  description: 'Rive animation with next.js And Tailwindcss For Styles',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-gradient-to-r from-purple-600 to-blue-600'>
        <div>
          <Navbar></Navbar>
          {children}
        </div>
      </body>
    </html>
  );
}
