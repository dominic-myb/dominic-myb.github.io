import CardContent from "./CardContent";
import CardDate from "./CardDate";
import CardDescription from "./CardDescription";
import CardItem from "./CardItem";
import CardSubtitle from "./CardSubtitle";
import CardTitle from "./CardTitle";

const TimelineCard = ({ idx, timeline }) => (
  <CardItem idx={idx}>
    <CardContent>
      <CardDate date={timeline.date} />
      <CardTitle title={timeline.title} />
      <CardSubtitle subtitle={timeline.subtitle} />
      <CardDescription desc={timeline.description} />
    </CardContent>
  </CardItem>
);

export default TimelineCard;
