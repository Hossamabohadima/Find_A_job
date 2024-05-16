from django.http import HttpResponse
from django.template import loader
from members.models import members_users,jobs,applyjobs,contacts
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.db.models import Q

def Home(request):
 template = loader.get_template('Home.html')
 return HttpResponse(template.render())


    
def sign_up(request):
        template = loader.get_template('sign_up.html')
        return HttpResponse(template.render())

@csrf_exempt
def register(request):
    if request.method =="POST":
      x = request.POST['username']
      y = request.POST['email']
      z = request.POST['password']
      w = request.POST['company']
      sign_up_data = members_users(username=x, Email=y, password=z, companyname=w)
      sign_up_data.save()  
      return HttpResponse("login")

def login(request):
 template = loader.get_template('login.html')
 return HttpResponse(template.render())

@csrf_exempt
def Check(request):
    if request.method == "POST":
        x = request.POST.get('username')
        z = request.POST.get('password')
        # Check if both username and password are provided
        if x and z:
            # Query the members_users table to check if the user exists
            user = members_users.objects.filter(username=x, password=z).first()
            if user:
                # If user exists, return the name of the company
                company_name = user.companyname
                return HttpResponse(company_name)
            else:
                return HttpResponse("User does not exist")
    else:
        return HttpResponse("Only POST requests are allowed")


def about_us(request):
 template = loader.get_template('about-us.html')
 return HttpResponse(template.render())

def contact_us(request):
 template = loader.get_template('contact-us.html')
 return HttpResponse(template.render())



@csrf_exempt
def contact(request):
    if request.method == "POST":
        name = request.POST.get('name')
        phone = request.POST.get('phone')
        message = request.POST.get('message')
        email = request.POST.get('email')
        contacts
        c = contacts(
            tname =name,
    telephone = phone,
    Email = email,
    message = message
        )
        c.save()
        return HttpResponse("true")

    else:
        return HttpResponse("Only POST requests are allowed")
def add_job(request):
 template = loader.get_template('add_job.html')
 return HttpResponse(template.render())

@csrf_exempt
def add(request):
    if request.method == "POST":
       

        status= request.POST.get('status')
        idInput= request.POST.get('id')
        yearsInput= request.POST.get('years')
        position= request.POST.get('position')
        aboutUS= request.POST.get('about_us')
        description= request.POST.get('description')
        skills= request.POST.get('skills_required')
        loca= request.POST.get('location')
        salary= request.POST.get('salary')
        hours= request.POST.get('hours')
        company_name= request.POST.get('company_name')
        new_data = jobs(
            Status=status,
            idInput=idInput,
            yearsInput=yearsInput,
            position=position,
            about_us=aboutUS,
            description=description,
            required=skills,
            loc=loca,
            Salary=salary,
            Hours=hours,
            companyname=company_name
        )
        new_data.save()
        return HttpResponse(True)
    else:
        return HttpResponse("Only POST requests are allowed")



def admin_HomePage(request):
 template = loader.get_template('admin_HomePage.html')
 return HttpResponse(template.render())

def Get_admin_jobs(request):
    if request.method == "GET":
     
        x = request.GET.get('companyname')
        if x :
            jobslist = jobs.objects.filter(companyname=x)
            if jobslist.exists():
                jobs_data = [{'idInput': job.idInput, 'position': job.position, 'description': job.description} for job in jobslist]
                return JsonResponse(jobs_data,safe=False)
            else:
                return JsonResponse({'message': 'No jobs found for the specified company'}, status=404)
        else:
            return JsonResponse({'error': 'Company name parameter is missing'}, status=400)

    else:
        return JsonResponse({'error': 'Only GET requests are allowed'}, status=405)



def admin_Job_details(request):
 template = loader.get_template('admin_Job-details.html')
 return HttpResponse(template.render())


def details(request):
 if request.method == "GET":
    x=str(request.GET.get("index"))
    if x :
            job = jobs.objects.filter(idInput=x).first()
            if job:
                job_data = {
                    'Status': job.Status,
                    'idInput': job.idInput,
                    'yearsInput': job.yearsInput,
                    'position': job.position,
                    'about_us': job.about_us,
                    'description': job.description,
                    'required': job.required,
                    'loc': job.loc,
                    'Salary': str(job.Salary),  
                    'Hours': job.Hours,
                    'companyname': job.companyname
                }
                return JsonResponse(job_data)
            else:
                return JsonResponse({'message': 'No jobs found for the specified company'}, status=404)


def DeleteJob(request):
 if request.method == "GET":
    x=str(request.GET.get("index"))
    if x :
            job = jobs.objects.filter(idInput=x).first()
            if job:
                job.delete() 
                return HttpResponse("true")
    else:
         return JsonResponse({'message': 'No jobs found for the specified company'}, status=404)



def AdminEdit_job(request):
 template = loader.get_template('AdminEdit-job.html')
 return HttpResponse(template.render())

def applied_jobs(request):
 template = loader.get_template('applied-jobs.html')
 return HttpResponse(template.render())



def Get_Applayedjobs(request):
    if request.method == "GET":
     
        x = request.GET.get('user')
        if x :
            jobslist = applyjobs.objects.filter(username=x)
            if jobslist.exists():
                jobs_data = [{'idInput': job.idInput, 'position': job.position, 'description': job.description} for job in jobslist]
                return JsonResponse(jobs_data,safe=False)
            else:
                return JsonResponse({'message': 'No jobs found for the specified company'}, status=404)
        else:
            return JsonResponse({'error': 'Company name parameter is missing'}, status=400)

    else:
        return JsonResponse({'error': 'Only GET requests are allowed'}, status=405)




def apply(request):
 template = loader.get_template('apply.html')
 return HttpResponse(template.render())

@csrf_exempt
def applyDS(request):
    if request.method == "POST":
        user= request.POST.get('user')
        email= request.POST.get('email')
        fname= request.POST.get('fname')
        lname= request.POST.get('lname')
        jobid= request.POST.get('jobid')
        address= request.POST.get('address')
        phone= request.POST.get('phone')
        new_data = applyjobs(
            firstname = fname,
            lastname = lname,
            address =address,
            telephone = phone,
            Email = email,
            idInput = jobid,
            username =user,
        )
        new_data.save()
        return HttpResponse(True)
    else:
        return HttpResponse("Only POST requests are allowed")

def Job_details(request):
 template = loader.get_template('Job-details.html')
 return HttpResponse(template.render())

def jobslist(request):
 template = loader.get_template('jobslist.html')
 return HttpResponse(template.render())

def Get_jobs(request):
    if request.method == "GET":
     
        
            jobslist = jobs.objects.all()
            if jobslist.exists():
                jobs_data = [{'idInput': job.idInput, 'position': job.position, 'description': job.description} for job in jobslist]
                return JsonResponse(jobs_data,safe=False)
            else:
                return JsonResponse({'message': 'No jobs found for the specified company'}, status=404)
       
    else:
        return JsonResponse({'error': 'Only GET requests are allowed'}, status=405)





def search(request):
    if request.method == "GET":
        x = request.GET.get('search')
        if x:
            jobslist = jobs.objects.filter(Q(position__icontains=x) | Q(required__icontains=x))
            if jobslist.exists():
                jobs_data = [{'idInput': job.idInput, 'position': job.position} for job in jobslist]
                return JsonResponse(jobs_data, safe=False)
            else:
                return JsonResponse({'message': 'No jobs found for the specified search criteria'}, status=404)
        else:
            return JsonResponse({'error': 'Search parameter is missing'}, status=400)
    else:
        return JsonResponse({'error': 'Only GET requests are allowed'}, status=405)