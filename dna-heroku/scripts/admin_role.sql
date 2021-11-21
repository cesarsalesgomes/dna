INSERT INTO public.directus_roles(
	id, name, icon, description, enforce_tfa, admin_access, app_access
) VALUES (
	'437c1698-1299-4992-aebe-4d7562ca3a05', 
	'Administrator', 
	'verified', 
	'Initial administrative role with unrestricted App/API access', 
	false, true, true
);