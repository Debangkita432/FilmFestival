const PageNav = () => {
  return (
    <div className="bg-primary text-primary-foreground py-3">
      <div className="container mx-auto px-4">
        <div className="flex justify-end gap-6">
          {["Page 1", "Page 2", "Page 3", "Page 4", "Page 5"].map((page) => (
            <a
              key={page}
              href={`#${page.toLowerCase().replace(" ", "-")}`}
              className="font-bold text-sm hover:text-accent transition-colors"
            >
              {page}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageNav;
