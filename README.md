# Web Development Project 4 - Dog Discovery App

Submitted by: **Amshu Wagle**

This web app is a discovery application that allows users to explore random dog breeds, with the ability to create a personalized ban list of breeds they don't want to see.

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed: 

- [x] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - The type of attribute displayed for each image is consistent across API calls (breed name and total available images)
- [x] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - A single dog breed result is displayed at a time 
  - Displayed attributes match the displayed image
  - There is at least one image per API call
- [x] **API call response results should appear random to the user**
  - Clicking on the Discover button generates a seemingly random new dog breed each time
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - Breed name is clickable
  - Clicking on a breed not on the ban list immediately adds it to the ban list 
  - Clicking on a breed in the ban list immediately removes it from the ban list 
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - Clicking on the Discover button will not show breeds that are on the ban list

The following **optional** features are implemented:

- [x] Users can see a stored history of their previously displayed results from this session
  - A dedicated section displays all previous dog images seen
  - Each time the API call button is clicked, the history updates with the newest result

The following **additional** features are implemented:

* Added hover effects for better user interaction
* Responsive design for different screen sizes

## Video Walkthrough

Here's a walkthrough of implemented user stories:

[![Cosmic Trivia](https://img.youtube.com/vi/3E6ThhldyPQ/0.jpg)](https://www.youtube.com/watch?v=3E6ThhldyPQ)
[![Discover Dogs](https://img.youtube.com/vi/Qvw_Jox6xkI/0.jpg)](https://www.youtube.com/watch?v=Qvw_Jox6xkI)

<!-- https://www.youtube.com/watch?v=
https://youtu.be/Qvw_Jox6xkI?si=L-EOHh_rQt5N49N6 -->
## Notes

Challenges encountered while building the app:
- Handling API calls and preventing banned breeds from appearing
- Ensuring smooth user experience with random breed selection


## License

    Copyright [2025] [Amshu Wagle]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
