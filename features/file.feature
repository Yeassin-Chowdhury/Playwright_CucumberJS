Feature: Amazon Automation

  Scenario Outline: To search for "<data>" 
    Given Navigate to the webpage
    When I am on the page
    And I provide the "<data>" in searchbar
    And capture first 3 values

  Examples: 
  |data|
  |nvidia 3060|
  |nvidia 3070|
  |nvidia 3080|
  