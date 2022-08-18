export const setIsSaved = (currArticle, savedArticles) => {
  return savedArticles.find((element) => {
    return (
      element.url === currArticle.url &&
      element.publishedAt === currArticle.publishedAt
    );
  })
    ? true
    : false;
};

const getKeywordsFrequencies = (cards) => {
  const keywordsFrequencies = {};

  cards.forEach((card) => {
    keywordsFrequencies[card.keyword] = keywordsFrequencies[card.keyword]
      ? keywordsFrequencies[card.keyword] + 1
      : 1;
  });

  return keywordsFrequencies;
};

const getKeywordsByFrequency = (cards) => {
  const keywordsFrequencies = getKeywordsFrequencies(cards);

  return Object.keys(keywordsFrequencies).sort((a, b) =>
    keywordsFrequencies[a] > keywordsFrequencies[b] ? -1 : 1
  );
};

export const getKeywordsSummaryString = (cards) => {
  const keywordsByFrequency = getKeywordsByFrequency(cards);
  var summaryString = keywordsByFrequency.slice(0, 2).join(', ');
  if (keywordsByFrequency.length > 2) {
    summaryString += ` and ${keywordsByFrequency.length - 2} other`;
  }
  return summaryString;
};

export const getCardsByKeywordFrequency = (cards) => {
  const keywordsFrequencies = getKeywordsFrequencies(cards);

  return cards.sort((a, b) =>
    keywordsFrequencies[a.keyword] > keywordsFrequencies[b.keyword] ? -1 : 1
  );
};
