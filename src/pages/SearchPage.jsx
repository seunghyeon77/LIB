import { useLocation, useParams } from "react-router-dom";

import { Body, Page } from "../styles/PageLayout";
import SearchPageBook from "../components/SearchPageBook";

export default function SearchPage() {
  const location = useLocation();
  const searchBooks = location.state ? location.state : null;
  const searchInput = useParams();

  return (
    <Page>
      <Body style={{backgroundColor: '#ffffff'}}>
        <SearchPageBook searchBooks={searchBooks} searchInput={searchInput} />
      </Body>
    </Page>
  );
}
