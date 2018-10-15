const openSearchXml = props => `
<OpenSearchDescription
    xmlns="http://a9.com/spec/opensearch/1.1/"
    xmlns:suggestions="http://www.opensearch.org/specifications/opensearch/extensions/suggestions/1.1">
  <ShortName>Interrobang</ShortName>
  <LongName>Interrobang Web Search</LongName>
  <Description>Interrobang - custom search !bangs, standard DuckDuckGo !bangs, selectable default search engine</Description>
  <InputEncoding>UTF-8</InputEncoding>
  <OutputEncoding>UTF-8</OutputEncoding>
  <AdultContent>false</AdultContent>
  <Language>en-us</Language>
  <Developer>Caleb Peterson</Developer>
  <Contact>caleb.peterson@cubicle6.com</Contact>
  <Url type="text/html" template="https://interrobang.online/${
    props.searchUrl
  }/search?query={searchTerms}" />
  <Url type="application/opensearchdescription+xml" rel="self" template="https://interrobang.online/${
    props.searchUrl
  }/open-search.xml" />
  <Url type="application/x-suggestions+json"
        template="https://interrobang.online/${
          props.searchUrl
        }/suggest?query={searchTerms}"/>
</OpenSearchDescription>
`;

module.exports = openSearchXml;
