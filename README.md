# DMV Server For Banger and Co.

## Author

This repository has been created and maintained by <b>Lakindu Hewawasam</b>

## Business Usecase

- CSV File contains list of licenses that are suspended, lost, stolen
- File is updated on a daily basis at 12:01am.
- When customer provides license details, check the informatio and if license matches in the csv file, send mock email to DMV.

## Usage

- This `node.js` REST api is set up as a mock api for the Department of Motor Vehicles.
- The CSV file located at the `files` directory will be fetched by the Banger Backend for Verification purposes of the user information.

## Repo Setup

- Clone repository using `ssh` link
- Run `npm install`
- Run `npm start`
