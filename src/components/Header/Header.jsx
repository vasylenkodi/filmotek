import Navigation from './Navigation/Navigation';
import SearchQuery from './SearchQuery/SearchQuery';
import Logo from './Logo/Logo';

export default function Header({ modalHandleFunctions }) {
  return (
    <header className="header">
      <Logo />
      <Navigation modalHandleFunctions={modalHandleFunctions} />
      <SearchQuery />
    </header>
  );
}
