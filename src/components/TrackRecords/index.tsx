import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MotionDiv, MotionSection } from "@/framer-motion/elements";
import {
  bottomSideVariants,
  containerVariants,
  fadeInVariants,
} from "@/framer-motion/variants";

export default function TrackRecords() {
  const trackRecordsData = [
    {
      brand: "DEFCLO",
      achievements: [
        {
          name: "Defclo.man",
          metric: "Website Visits",
          increase: 40,
        },
        {
          name: "Defclo.femme",
          metric: "Website Visits",
          increase: 62,
        },
      ],
    },
    {
      brand: "SINICARE",
      achievements: [
        {
          name: "Reel Views",
          metric: "Views",
          value: 64000,
        },
        {
          name: "New Customers",
          metric: "Customers",
          value: 60,
        },
      ],
    },
  ];

  return (
    <MotionSection
      variants={bottomSideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section_wrapper"
    >
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="heading_1">Our Track Records</h2>
        </div>
        <MotionDiv
          variants={containerVariants}
          className="grid gap-6 md:grid-cols-2"
        >
          {trackRecordsData.map((brand) => (
            <MotionDiv variants={fadeInVariants} key={brand.brand}>
              <Card>
                <CardHeader>
                  <CardTitle>{brand.brand}</CardTitle>
                </CardHeader>
                <CardContent>
                  {brand.achievements.map((achievement, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">
                          {achievement.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {achievement.metric}
                        </span>
                      </div>
                      {"increase" in achievement ? (
                        <>
                          <Progress
                            value={achievement.increase}
                            className="mb-1"
                          />
                          <div className="text-sm text-right">
                            {achievement.increase}% increase
                          </div>
                        </>
                      ) : (
                        <div className="text-2xl font-bold text-right">
                          {achievement.value.toLocaleString()}
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
