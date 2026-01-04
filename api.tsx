const apiUrl = "https://www.volunteerconnector.org/api/search/";

export type OpportunitiesType = {
  url: string;
  title: string;
  description: string;
  remote_or_online: boolean;
  organization: { name: string; logo: string; url: string };
  dates: string;
  duration: string;
};

export async function Opportunity() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
  return data;
}
