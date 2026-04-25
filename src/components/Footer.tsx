export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-bold tracking-tight text-foreground">
              Qadeer<span className="text-primary">.dev</span>
            </span>
            <p className="text-sm text-muted-foreground mt-2">
              Crafting fast, scalable web applications with modern technologies.
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Qadeer Afzal. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
