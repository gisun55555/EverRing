import ReviewRating from "@components/common/ReviewRating";
import RatingBreakdown from "@features/review/components/RatingBreakdown";

interface Scores {
  teamId: number;
  // gatheringId: 0, 얘가 무슨 역할을 하는지 아직 모르겠음..
  type: string;
  averageScore: number;
  oneStar: number;
  twoStars: number;
  threeStars: number;
  fourStars: number;
  fiveStars: number;
}

interface RatingContainerProps {
  scoreData: Scores;
}

export default function RatingContainer({ scoreData }: RatingContainerProps) {
  return (
    // lg:px-48
    <div className="w-full shrink-0 border-b-2 border-t-2 border-gray-200 bg-white px-6 py-8 sm:px-[4.5rem]">
      {/* justify-between sm:gap-28 */}
      <div className="flex w-full items-center justify-center gap-[10%] sm:gap-[15%] lg:gap-[30%]">
        <div className="flex flex-col items-center gap-2">
          <p className="flex items-start gap-[0.125rem] text-2xl font-semibold">
            <span className="text-gray-900">
              {scoreData?.averageScore ?? 0}
            </span>
            <span className="text-gray-400">/5</span>
          </p>
          <ReviewRating score={scoreData.averageScore} />
        </div>
        <RatingBreakdown scoreData={scoreData} />
      </div>
    </div>
  );
}
