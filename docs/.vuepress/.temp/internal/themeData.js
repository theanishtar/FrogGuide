export const themeData = JSON.parse("{\"locales\":{\"/\":{\"selectLanguageName\":\"Tiếng việt\"}},\"logo\":\"https://raw.githubusercontent.com/echhoclaptrinh/Image/main/frog/hero.png\",\"navbar\":[{\"text\":\"Home\",\"link\":\"README.md\"},{\"text\":\"Guide\",\"link\":\"/guide.md\"},{\"text\":\"Lập trình\",\"children\":[{\"text\":\"Java\",\"children\":[{\"text\":\"Java cơ bản\",\"link\":\"/course/java/Java-Basic/Readme.md\"},{\"text\":\"Hướng đối tượng trong java\",\"link\":\"/not-foo/\"}]}]},{\"text\":\"Group 2\",\"children\":[{\"text\":\"Always active\",\"link\":\"./course/java/Java Basic/1.GioiThieu.html\"},{\"text\":\"Active on /foo/\",\"link\":\"/not-foo/\"}]},{\"text\":\"Github\",\"link\":\"https://github.com/TheanIshtar\"}],\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
