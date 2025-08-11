type SubMenuProps = {
  title: string;
  items: string[];
};

export const SubMenu = ({ title, items }: SubMenuProps) => {
  return (
    <aside className="sm:sticky sm:right-0 sm:max-w-1/4 sm:mr-8 sm:mt-8">
      <div className="sub-menu">
        <input type="checkbox" id="submenu-toggle" className="hidden peer" />
        <label htmlFor="submenu-toggle" className="cursor-pointer sm:hidden">
          <h3>{title}</h3>
        </label>
        <ul>  
          {items.map(item => (
          <li key={item}>
            <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a>
          </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};