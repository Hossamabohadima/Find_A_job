from django.urls import path

from . import views
urlpatterns = [ 
    path( '', views.Home, name='Home'),  
    path( 'sign_up', views.sign_up, name='sign_up'),
    path( 'login', views.login, name='login'),
    path( 'about-us', views.about_us, name='about_us'),
    path( 'contact-us', views.contact_us, name='contact-us'),
    path( 'add_job', views.add_job, name='add_job'),
    path( 'admin_HomePage', views.admin_HomePage, name='admin_HomePage'),
    path( 'admin_Job-details', views.admin_Job_details, name='admin_Job-details'),  
    path( 'AdminEdit-job', views.AdminEdit_job, name='AdminEdit-job'),   
    path( 'applied-jobs', views.applied_jobs, name='applied-jobs'),
    path( 'apply', views.apply, name='apply'),
    path( 'Job-details', views.Job_details, name='Job-details'),
    path( 'jobslist', views.jobslist, name='jobslist'),

    path('register', views.register, name='register'), 
    path('Check', views.Check, name='Check'),
    path('add', views.add, name='add'),
    path('Get_admin_jobs', views.Get_admin_jobs, name='Get_admin_jobs'),
    path('Get_jobs', views.Get_jobs, name='Get_jobs'),
    path( 'details', views.details, name='details'),
    path( 'DeleteJob', views.DeleteJob, name='DeleteJob'),
    path( 'applyDS', views.applyDS, name='applyDS'),
    path( 'Get_Applayedjobs', views.Get_Applayedjobs, name='Get_Applayedjobs'),
    path( 'contact', views.contact, name='contact'),
    path( 'search', views.search, name='search'),

    ]

