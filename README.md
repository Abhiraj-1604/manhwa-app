# Manhwa Cloud Deployment Project

This project is a cloud-based web application that displays a list of fantasy manhwa titles. The application is deployed on AWS and features an Auto Scaling group, RDS database, and S3 for image storage.

## Table of Contents

- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [Setup and Deployment](#setup-and-deployment)
- [Auto Scaling and Security](#auto-scaling-and-security)
- [How to Run Locally](#how-to-run-locally)
- [Screenshots](#screenshots)
- [Author](#author)

## Project Overview

This application displays a list of manhwa titles along with their genres and descriptions using mock JSON data. It was built using Node.js and Express, and it was deployed on AWS using EC2, RDS, and S3.

## Architecture

- **EC2**: For hosting the Node.js server.
- **S3**: Used to store and serve static assets such as images.
- **RDS**: For storing manhwa data in a relational database (MySQL).
- **Auto Scaling**: Configured to handle increased traffic by automatically adding/removing EC2 instances.
- **HTTPS**: Secured using AWS Certificate Manager.

## Setup and Deployment

### AWS Setup

1. **EC2 Instance**: 
   - Launch an EC2 instance with Amazon Linux 2 AMI.
   - Install Node.js on the instance.
   - Clone this repository and run the application.
   
2. **RDS**: 
   - Create a MySQL RDS instance.
   - Set up your database schema and tables for storing manhwa data.
   
3. **S3**:
   - Create an S3 bucket to store images for the manhwa titles.
   
4. **Auto Scaling**:
   - Set up an Auto Scaling group with a minimum of 1 and maximum of 3 instances.
   - Configure a scaling policy based on CPU utilization.


