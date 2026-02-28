import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export const metadata = {
    title: 'AI Data Analyzer',
    description: 'A powerful AI-powered platform that allows you to analyze and visualize data intuitively.',
    appleWebApp: {
        title: 'AI Data Analyzer',
    },
};

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
