import GraphTabs from 'graph-tabs';
const tabs = new GraphTabs('hero-tabs');

document.addEventListener('DOMContentLoaded', () => {
  tabs.tabsBtns.forEach(btn => {
    btn.addEventListener('mouseover', (e) => {
      let currentTab = tabs.tabList.querySelector('[aria-selected]');

      if (e.currentTarget !== currentTab) {
        tabs.switchTabs(e.currentTarget, currentTab);
      }
    })
  })
})
