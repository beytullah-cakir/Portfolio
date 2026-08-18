export default function Footer() {
  return (
    <footer className="footer bg-slate-950 py-6 border-t border-slate-800 flex-shrink-0">
      <div className="container mx-auto text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
