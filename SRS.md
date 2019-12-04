# Software Requirements Specifications
## Introduction
This file reflects what the miousify store generic server is all about. The *Generic* Server is build to serve up business sites provisioned by miouisfy. 
This software is packaged as a docker image, which would be used to define unique docker container for each business. Business containers could scale up, and down based on the needs.

## What this software should deliver

### Allow potential costomers to views what a business offers
This software provides basic functionality to allow potential customers who interface with the business via their website to view what the have in stock.

Persons who are not yet customers also have the option to subscribe as a customer to this business, with this the are able to complete transactions they intend to make with the business.

### Determines site theme to make use of  (Based on admins choice)
This software is packaged in the manner based on the code that ensures that it always has the latest themes being utilized. Business admins who have selected a desired theme should be sure that the would be rendered on their site as expected.

### Monitor customer session
This software should provide an interface that monitors customer session all through their stay on the website. This is based on the fact that the are registered members and are already logged in to the site.
user session should be created once a user registers, or logs in.

### Should provide endpoints from which users can met needed need from the website

### Software should provide an API to access miousify-rest-api, what allows software components easy access to needed data.

## Endpoints
- Products Endpint
- Products json Endpoint
- Product Endpoint
- Product json endpoint
- Accounts Endpoint
- Index
- Cart
- Checkout
- About
- Contact
