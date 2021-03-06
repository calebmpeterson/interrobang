const openSearchXml = props => `
<OpenSearchDescription
    xmlns="http://a9.com/-/spec/opensearch/1.1/">
  <ShortName>${props.title || "Interrobang"}</ShortName>
  <Description>Interrobang - custom search !bangs, standard DuckDuckGo !bangs, selectable default search engine</Description>
  <InputEncoding>UTF-8</InputEncoding>
  <Url type="text/html" method="get" template="https://interrobang.online/${
    props.searchUrl
  }/search?query={searchTerms}" />
  <Url type="application/x-suggestions+json"
        template="https://interrobang.online/${
          props.searchUrl
        }/suggest?query={searchTerms}"/>
</OpenSearchDescription>
`;

module.exports = openSearchXml;
