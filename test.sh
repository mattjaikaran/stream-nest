#!/bin/bash

# same shit as the makefile. trying to decide what to do here. 


# Install dependencies
yarn install

# Start the development server
yarn start:dev &

# Seed the database
npx mikro-orm seeder:run --class=DatabaseSeeder