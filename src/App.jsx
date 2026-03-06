import React from "react"
import Card from "./components/Card"


function App() {

  const jobOpenings = [
    {
      brandLogo: "data:image/webp;base64,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",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://tse2.mm.bing.net/th/id/OIP.BHsDLmb5Z-pq2W2DwOaZCAHaGF?rs=1&pid=ImgDetMain&o=7&rm=3",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$60/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://th.bing.com/th/id/OIP.lQ9JvL9Rxhx_s-VKQNEidgHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      companyName: "Meta",
      datePosted: "10 days ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://tse1.mm.bing.net/th/id/OIP.3qsMnUTHk9Zs8dA5meZsSwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      companyName: "Apple",
      datePosted: "1 week ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://tse4.mm.bing.net/th/id/OIP.Ko2MIOzzDlWu8a_1Xo8UAQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      companyName: "Netflix",
      datePosted: "3 days ago",
      post: "Frontend Architect",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Remote"
    },
    {
      brandLogo: "https://tse4.mm.bing.net/th/id/OIP.nkc2HTv3MjR7LoriMWSajAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Software Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/022/424/230/original/tesla-logo-editorial-free-vector.jpg",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Web Developer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$48/hr",
      location: "Delhi, India"
    },
    {
      brandLogo: "https://tse1.mm.bing.net/th/id/OIP.WAEaGWZT8hslzvR4FwV_mwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      companyName: "Adobe",
      datePosted: "2 days ago",
      post: "UI/UX Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$52/hr",
      location: "Gurgaon, India"
    },
    {
      brandLogo: "https://tse2.mm.bing.net/th/id/OIP.3wBK9HjW0D8pmF6wk3plbQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      companyName: "LinkedIn",
      datePosted: "8 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hr",
      location: "Chennai, India"
    },
    {
      brandLogo: "https://tse3.mm.bing.net/th/id/OIP.Oy5wfKuZ37KcuXONE7zjnQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      companyName: "Uber",
      datePosted: "12 days ago",
      post: "React JS Developer",
      tag1: "Contract",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Kolkata, India"
    }
  ];



  return (
    <div className="parents">
      {jobOpenings.map(function (elem, idx) {

        return <div key={idx}>
          <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} datePosted={elem.datePosted} brandLogo={elem.brandLogo} />
        </div>

      })}

    </div>


  )
}

export default App
