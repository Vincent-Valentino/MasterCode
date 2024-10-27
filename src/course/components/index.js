import Header from "@/course/components/HeaderContent.vue";
import Text from "@/course/components/Text.vue";
import TextSection from "@/course/components/TextSection.vue";
import PreCode from "@/course/components/PreCode.vue";
import ListSection from "@/course/components/ListSection.vue";
import TextCode from "@/course/components/TextCode.vue";

export default function registerComponents(app) {
  app.component('Header', Header);
  app.component('Text', Text);
  app.component('TextSection', TextSection);
  app.component('PreCode', PreCode);
  app.component('ListSection', ListSection);
  app.component('TextCode', TextCode);
}

