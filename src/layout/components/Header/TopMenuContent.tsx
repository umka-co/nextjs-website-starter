import { FunctionComponent } from 'react';
import { Button } from '@/components';

const MARGIN_BETWEEN_MENU_ITEMS = '0.125rem';

interface Props {
  activeClassName?: string;
  marginForButton?: string;
}

/**
 * Content of the Header's Menu
 * @component TopMenuContent
 * @param {string} [activeClassName] - the CSS class for the active menu item
 * @param {string} [marginForButton] - the margin between menu items
 */
const TopMenuContent: FunctionComponent<Props> = ({ activeClassName, marginForButton = MARGIN_BETWEEN_MENU_ITEMS }) => {
  return (
    <ul role="menu">
      <li role="menuitem">
        <Button activeClassName={activeClassName} href="/" margin={marginForButton} variant="text">
          Home
        </Button>
      </li>
      <li role="menuitem">
        <Button activeClassName={activeClassName} href="/download/" margin={marginForButton} variant="text">
          Download
        </Button>
      </li>
      <li role="menuitem">
        <Button activeClassName={activeClassName} href="/contact/" margin={marginForButton} variant="text">
          Contact
        </Button>
      </li>
    </ul>
  );
};

export default TopMenuContent;
