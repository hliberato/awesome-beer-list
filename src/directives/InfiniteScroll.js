export default {
  inserted: function (el, binding) {
    window.addEventListener("scroll", () => {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        binding.value();
      }
    });
  },
};
