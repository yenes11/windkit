import {
  KeyboardEventHandler,
  MouseEventHandler,
  useRef,
  useState,
} from 'react';
import { ChevronDown } from 'react-feather';

const names = ['Enes', 'Seçil', 'Erdem', 'Apo'];

function Select() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleKeyDown = (e: any) => {
    if (!isOpen) return;
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault(); // Prevent scrolling the page with arrow keys

      if (e.key === 'ArrowUp' && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      } else if (e.key === 'ArrowDown' && activeIndex < names.length - 1) {
        setActiveIndex((prev) => prev + 1);
      }
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedIndex(activeIndex);
      setIsOpen(false);
    }
  };

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    setSelectedIndex(index);
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="cursor-pointer ring-1 ring-slate-300 pl-4 pr-2 py-1 min-w-[16rem] shadow-md flex justify-between rounded text-slate-700"
        aria-haspopup="listbox"
        aria-labelledby="custom-select"
        aria-controls="select-options"
        type="button"
        onKeyDown={handleKeyDown}
      >
        {names[selectedIndex] || 'Select a person'}
        <ChevronDown />
      </button>
      {isOpen && (
        <ul
          className="ring-1 overflow-hidden ring-slate-300 rounded mt-2 flex flex-col shadow-md"
          aria-labelledby="custom-select"
          aria-orientation="vertical"
          id="select-options"
          role="listbox"
          aria-activedescendant={`active-option-${activeIndex}`}
        >
          {names.map((name, index) => (
            <li
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(-1)}
              onClick={() => handleSelect(index)}
              key={name}
              className={`cursor-pointer text-left py-2 px-4 ${
                selectedIndex === index && 'font-bold'
              } ${activeIndex === index && 'bg-indigo-600 text-white'}`}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
