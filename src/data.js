const datas = [
    {
      id: 1,
      Firstname: "Alex",
      lastName: "A",
      startDate: "2021-08-12",
      department: "Human resources",
      dateOfBirth: "2002-03-31",
      street: "Nuggets street",
      city: "Denver",
      state: "Colorado",
      zipCode: "33000",
    },
    {
      id: 2,
      Firstname: "Randy",
      lastName: "March",
      startDate: "1990-07-14",
      department: "Legal",
      dateOfBirth: "1968-01-01",
      street: "Kenny's road",
      city: "South Park",
      state: "Colorado",
      zipCode: "75000",
    },
    {
      id: 3,
      Firstname: "Robert",
      lastName: "Nesta",
      startDate: "2019-12-12",
      department: "Legal",
      dateOfBirth: "1985-02-07",
      street: "Kingston av",
      city: "Miami",
      state: "Florida",
      zipCode: "31000",
    },
    {
      id: 4,
      Firstname: "Julia",
      lastName: "R",
      startDate: "2020-07-08",
      department: "Engineering",
      dateOfBirth: "1998-04-09",
      street: "Vine alley",
      city: "Compton",
      state: "California",
      zipCode: "56000",
    },
    {
      id: 5,
      Firstname: "Ray",
      lastName: "Demption",
      startDate: "2021-08-12",
      department: "Marketing",
      dateOfBirth: "2002-04-23",
      street: "Mormon's road",
      city: "Salt Lake City",
      state: "Utah",
      zipCode: "33000",
    },
    {
      id: 6,
      Firstname: "Marshall",
      lastName: "M",
      startDate: "1992-03-17",
      department: "Marketing",
      dateOfBirth: "1972-10-17",
      street: "Shady Street",
      city: "Detroit",
      state: "Michigan",
      zipCode: "75000",
    },
    {
      id: 7,
      Firstname: "Meg",
      lastName: "W",
      startDate: "2021-05-13",
      department: "Human resources",
      dateOfBirth: "1980-02-23",
      street: "Stripes av",
      city: "Chicago",
      state: "Illinois",
      zipCode: "31000",
    },
    {
      id: 8,
      Firstname: "Robert",
      lastName: "Downey",
      startDate: "2020-09-23",
      department: "Legal",
      dateOfBirth: "1978-02-24",
      street: "12th avenue",
      city: "Sacramento",
      state: "California",
      zipCode: "56000",
    },
    {
      id: 9,
      Firstname: "Malcolm",
      lastName: "Noname",
      startDate: "2021-08-12",
      department: "Sales",
      dateOfBirth: "2002-03-31",
      street: "Baker Street",
      city: "Richmond",
      state: "Virginia",
      zipCode: "33000",
    },
    {
      id: 10,
      Firstname: "Jack",
      lastName: "W",
      startDate: "1990-07-14",
      department: "Sales",
      dateOfBirth: "1975-01-01",
      street: "21th avenue",
      city: "Harlem",
      state: "New York",
      zipCode: "75000",
    },
    {
      id: 11,
      Firstname: "Gwen",
      lastName: "S",
      startDate: "2021-12-12",
      department: "Marketing",
      dateOfBirth: "1980-12-23",
      street: "Dolphins road",
      city: "Orlando",
      state: "Florida",
      zipCode: "31000",
    },
    {
      id: 12,
      Firstname: "Megan",
      lastName: "Racoon",
      startDate: "2020-09-23",
      department: "Sales",
      dateOfBirth: "1998-02-24",
      street: "Milky way road",
      city: "Houston",
      state: "Texas",
      zipCode: "56000",
    },
  ];
  
  const columns = [
    { title: "First Name", accessor: "Firstname", sortable: true },
    { title: "Last Name", accessor: "lastName", sortable: true },
    { title: "Start Date", accessor: "startDate", sortable: true },
    { title: "Department", accessor: "department", sortable: true },
    { title: "Date of Birth", accessor: "dateOfBirth", sortable: true },
    { title: "Street", accessor: "street", sortable: true },
    { title: "City", accessor: "city", sortable: true },
    { title: "State", accessor: "state", sortable: true },
    { title: "Zip Code", accessor: "zipCode", sortable: true },
  ];
  
  const departments = [
    { name: "Sales", key: "sal" },
    { name: "Marketing", key: "mar" },
    { name: "Engineering", key: "eng" },
    { name: "Human Resources", key: "hr" },
    { name: "Legal", key: "leg" },
  ];
  
  const states = [
    {
      name: "Alabama",
      key: "AL",
    },
    {
      name: "Alaska",
      key: "AK",
    },
    {
      name: "American Samoa",
      key: "AS",
    },
    {
      name: "Arizona",
      key: "AZ",
    },
    {
      name: "Arkansas",
      key: "AR",
    },
    {
      name: "California",
      key: "CA",
    },
    {
      name: "Colorado",
      key: "CO",
    },
    {
      name: "Connecticut",
      key: "CT",
    },
    {
      name: "Delaware",
      key: "DE",
    },
    {
      name: "District Of Columbia",
      key: "DC",
    },
    {
      name: "Federated States Of Micronesia",
      key: "FM",
    },
    {
      name: "Florida",
      key: "FL",
    },
    {
      name: "Georgia",
      key: "GA",
    },
    {
      name: "Guam",
      key: "GU",
    },
    {
      name: "Hawaii",
      key: "HI",
    },
    {
      name: "Idaho",
      key: "ID",
    },
    {
      name: "Illinois",
      key: "IL",
    },
    {
      name: "Indiana",
      key: "IN",
    },
    {
      name: "Iowa",
      key: "IA",
    },
    {
      name: "Kansas",
      key: "KS",
    },
    {
      name: "Kentucky",
      key: "KY",
    },
    {
      name: "Louisiana",
      key: "LA",
    },
    {
      name: "Maine",
      key: "ME",
    },
    {
      name: "Marshall Islands",
      key: "MH",
    },
    {
      name: "Maryland",
      key: "MD",
    },
    {
      name: "Massachusetts",
      key: "MA",
    },
    {
      name: "Michigan",
      key: "MI",
    },
    {
      name: "Minnesota",
      key: "MN",
    },
    {
      name: "Mississippi",
      key: "MS",
    },
    {
      name: "Missouri",
      key: "MO",
    },
    {
      name: "Montana",
      key: "MT",
    },
    {
      name: "Nebraska",
      key: "NE",
    },
    {
      name: "Nevada",
      key: "NV",
    },
    {
      name: "New Hampshire",
      key: "NH",
    },
    {
      name: "New Jersey",
      key: "NJ",
    },
    {
      name: "New Mexico",
      key: "NM",
    },
    {
      name: "New York",
      key: "NY",
    },
    {
      name: "North Carolina",
      key: "NC",
    },
    {
      name: "North Dakota",
      key: "ND",
    },
    {
      name: "Northern Mariana Islands",
      key: "MP",
    },
    {
      name: "Ohio",
      key: "OH",
    },
    {
      name: "Oklahoma",
      key: "OK",
    },
    {
      name: "Oregon",
      key: "OR",
    },
    {
      name: "Palau",
      key: "PW",
    },
    {
      name: "Pennsylvania",
      key: "PA",
    },
    {
      name: "Puerto Rico",
      key: "PR",
    },
    {
      name: "Rhode Island",
      key: "RI",
    },
    {
      name: "South Carolina",
      key: "SC",
    },
    {
      name: "South Dakota",
      key: "SD",
    },
    {
      name: "Tennessee",
      key: "TN",
    },
    {
      name: "Texas",
      key: "TX",
    },
    {
      name: "Utah",
      key: "UT",
    },
    {
      name: "Vermont",
      key: "VT",
    },
    {
      name: "Virgin Islands",
      key: "VI",
    },
    {
      name: "Virginia",
      key: "VA",
    },
    {
      name: "Washington",
      key: "WA",
    },
    {
      name: "West Virginia",
      key: "WV",
    },
    {
      name: "Wisconsin",
      key: "WI",
    },
    {
      name: "Wyoming",
      key: "WY",
    },
  ];
  
  export { datas, columns, states, departments };
  