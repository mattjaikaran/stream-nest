install:
	yarn install

start:
	yarn start:dev

seed:
	npx mikro-orm seeder:run --class=DatabaseSeeder

setup: install start seed