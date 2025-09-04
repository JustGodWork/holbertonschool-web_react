import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";

function BodySectionWithMarginBottom({ title, children }) {
  return (
    <div className={css(styles.bodySectionWithMargin)}>
      <BodySection title={title}>{children}</BodySection>
    </div>
  );
}

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: "40px",
  },
});

export default BodySectionWithMarginBottom;
