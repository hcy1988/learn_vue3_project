import dayjs from 'dayjs'

export default function(app) {
  app.directive("format-time", {
    mounted(el, bindings) {
      let formatString = bindings.value;
      const textContent = el.textContent;
      let timestamp = parseInt(textContent);

      if (textContent.length == 10) {
        timestamp = timestamp * 1000
      }

      if (formatString) {
      }else {
        formatString = "YYYY-MM-DD HH:mm:ss"
      }
      
      el.textContent = dayjs(timestamp).format(formatString);
    }
  })
}