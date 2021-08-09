/**
 * My search logic
 * TODO make it easy to read
 * TODO make it maintainable
 */
var filterPosts = function (postMetaArr, searchObj) {
    var searchTags = searchObj.searchTags, searchString = searchObj.searchString;
    return postMetaArr
        // filter by tags
        .filter(function (postMeta) {
        return (searchTags.length < 1) ? true : (
        // TODO add an explanation
        postMeta.tags.some(function (postTag) {
            return searchTags.some(function (searchTag) { return postTag.includes(searchTag); });
        }));
    })
        // filter by the searchString
        .filter(function (postMeta) {
        var title = postMeta.title.toLowerCase();
        // if the searchString is a substring of the title or vice versa
        return searchString.includes(title) || title.includes(searchString);
    });
};
function updatePostsUI(searchObj) {
    // hide all post-cards
    document.querySelectorAll(".post-card").forEach(function (postCard) {
        postCard.classList.remove("show");
    });
    // show filtered post-cards
    var filteredPosts = filterPosts(props.postMetas, searchObj);
    filteredPosts.forEach(function (postMeta) {
        document.querySelector(".post-card[data-slug=" + postMeta.slug + "]").classList.add("show");
    });
}
function createSearchObj(searchInput) {
    var isTag = function (str) { return new RegExp(/^#[A-Za-z]*$/i).test(str); };
    var findTags = function (searchInput) {
        return searchInput.split(" ")
            .filter(isTag)
            .map(function (tag) { return tag.slice(1); });
    };
    var removeTags = function (searchString) { return searchString
        .split(" ")
        .filter(function (word) { return !isTag(word); })
        .join(" "); };
    return {
        searchTags: findTags(searchInput),
        searchString: removeTags(searchInput)
    };
}
function doSearch(searchString) {
    updatePostsUI(createSearchObj(searchString));
}

export { doSearch };
