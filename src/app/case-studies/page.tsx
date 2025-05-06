import { redirect } from "next/navigation";
import { generateTabKey } from "@/lib/utils";
import { caseStudiesList } from "@/constant";

// Find brand name
const caseStudiesKeys = caseStudiesList?.map(
  (caseStudy) => caseStudy.brand_name
);

const page = () => {
  return redirect(`/case-studies/${generateTabKey(caseStudiesKeys[0])}`);
};

export default page;
