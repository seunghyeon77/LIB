import RecordWrapper from "../components/MyRecord/RecordWrapper";
import ProgressWrapper from "../components/MyRecord/ProgressWrapper";
import MyStudyWrapper from "../components/MyRecord/MyStudyWrapper";
import { Body, Page } from "../styles/PageLayout";

export default function MyRecordPage() {
  return (
    <Page style={{height: '220vh'}}>
      <Body>
        <RecordWrapper />
        <ProgressWrapper />
        <MyStudyWrapper />
      </Body>
    </Page>
  );
}
