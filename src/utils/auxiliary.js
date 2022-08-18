export const getKeywordsSummaryString = (cards) => {
  /* console.log(`getKeywordsSummaryString. cards: ${JSON.stringify(cards)}`); */
  const keywordsArray = cards.map((card) => card.keyword);
  const uniqueKeywordsSet = [...new Set(keywordsArray)];
  var summaryString = uniqueKeywordsSet.slice(0, 2).join(', ');
  if (uniqueKeywordsSet.length > 2) {
    summaryString += ` and ${uniqueKeywordsSet.length - 2} other`;
  }
  return summaryString;
};

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
