// pages/index.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    FaHospital,
    FaUserInjured,
    FaCalendarCheck,
    FaBed,
    FaUserMd,
    FaDollarSign,
    FaHeartbeat,
    FaWheelchair,
    FaNotesMedical
} from 'react-icons/fa';

export default function Dashboard() {
    // Mock data
    const dashboardData = {
        totalPatients: 2468,
        appointmentsToday: 143,
        availableBeds: 28,
        activeStaff: 198,
        revenueToday: 32847,
        departments: [
            { name: 'Emergency', status: 85 },
            { name: 'Surgery', status: 65 },
            { name: 'ICU', status: 45 },
            { name: 'Pediatrics', status: 70 },
            { name: 'Cardiology', status: 55 },
            { name: 'Neurology', status: 40 }
        ],
        staffSchedule: [
            {
                id: 1,
                name: 'Dr. James Wilson',
                position: 'Senior Surgeon',
                department: 'Surgery',
                shift: '08:00 - 16:00',
                status: 'On Duty'
            }
        ],
        recentPatients: [
            { id: 'PT10025', name: 'John Smith', status: 'Admitted', room: '302' },
            { id: 'PT10024', name: 'Sarah Johnson', status: 'Pending', room: '205' }
        ],
        upcomingAppointments: [
            {
                doctorName: 'Dr. Michael Brown',
                specialty: 'Cardiology',
                time: '09:00 AM'
            },
            {
                doctorName: 'Dr. Emily Wilson',
                specialty: 'Neurology',
                time: '10:30 AM'
            }
        ],
        equipment: [
            {
                name: 'MRI Machine',
                status: 'Pending',
                maintenance: 'Next maintenance due in 5 days'
            },
            {
                name: 'X-Ray Unit 2',
                status: 'Urgent',
                maintenance: 'Maintenance overdue by 2 days'
            }
        ],
        surgeries: [
            {
                procedure: 'Emergency Heart Surgery',
                doctor: 'Dr. Michael Chen',
                operating: 'OR 3',
                time: 'Today - 14:30',
                status: 'Critical'
            },
            {
                procedure: 'Knee Replacement',
                doctor: 'Dr. Sarah Miller',
                operating: 'OR 1',
                time: 'Today - 16:00',
                status: 'Scheduled'
            },
            {
                procedure: 'Appendectomy',
                doctor: 'Dr. James Wilson',
                operating: 'OR 2',
                time: 'Tomorrow - 09:00',
                status: 'Prep Required'
            }
        ],
        todaysStats: {
            criticalCare: 18,
            availableICUs: 5,
            availableVentilators: 12,
            emergencyCases: 31,
            newAdmissions: 18,
            discharges: 14,
            availableDoctors: 32,
            scheduledSurgeries: 7
        },
        demographics: {
            age: [
                { range: '0-18', percentage: 25 },
                { range: '19-40', percentage: 35 },
                { range: '41-60', percentage: 28 },
                { range: '60+', percentage: 12 }
            ],
            gender: { male: 48, female: 52 },
            commonConditions: [
                { name: 'Cardiovascular', percentage: 32 },
                { name: 'Respiratory', percentage: 28 },
                { name: 'Diabetes', percentage: 24 }
            ]
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Head>
                <title>MediCenter Plus Hospital - Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <header className="bg-teal-500 text-white">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="bg-white p-1 rounded-md">
                            <FaHospital className="text-purple-500 text-xl" />
                        </div>
                        <span className="font-bold">MediCenter Plus Hospital</span>
                    </div>

                    <nav className="hidden md:flex space-x-6">
                        <Link href="/" className="text-white font-medium">Dashboard</Link>
                        <Link href="/patients" className="text-white/80 hover:text-white">Patients</Link>
                        <Link href="/appointments" className="text-white/80 hover:text-white">Appointments</Link>
                        <Link href="/staff" className="text-white/80 hover:text-white">Staff</Link>
                        <Link href="/reports" className="text-white/80 hover:text-white">Reports</Link>
                        <Link href="/inventory" className="text-white/80 hover:text-white">Inventory</Link>
                        <Link href="/finance" className="text-white/80 hover:text-white">Finance</Link>
                        <Link href="/hr" className="text-white/80 hover:text-white">HR</Link>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded flex items-center space-x-1">
                            <span>Emergency: 911</span>
                        </button>
                        <button className="bg-white text-teal-500 px-3 py-1 rounded flex items-center space-x-1">
                            <span>Admin</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-6">
                {/* Dashboard Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    <DashboardCard
                        icon={<FaUserInjured className="text-teal-500" />}
                        title="Total Patients"
                        value={dashboardData.totalPatients}
                    />
                    <DashboardCard
                        icon={<FaCalendarCheck className="text-teal-500" />}
                        title="Appointments Today"
                        value={dashboardData.appointmentsToday}
                    />
                    <DashboardCard
                        icon={<FaBed className="text-teal-500" />}
                        title="Available Beds"
                        value={dashboardData.availableBeds}
                    />
                    <DashboardCard
                        icon={<FaUserMd className="text-teal-500" />}
                        title="Active Staff"
                        value={dashboardData.activeStaff}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <DashboardCard
                        icon={<FaDollarSign className="text-teal-500" />}
                        title="Revenue Today"
                        value={`$${dashboardData.revenueToday}`}
                        className="lg:col-span-1"
                    />
                </div>

                {/* Charts and Status */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    {/* Patient Statistics Chart */}
                    <div className="bg-white rounded-lg shadow p-4 col-span-2">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">Patient Statistics</h2>
                            <div className="flex space-x-2">
                                <button className="px-3 py-1 text-sm rounded border border-gray-300">Week</button>
                                <button className="px-3 py-1 text-sm rounded bg-teal-500 text-white">Month</button>
                                <button className="px-3 py-1 text-sm rounded border border-gray-300">Year</button>
                            </div>
                        </div>
                        <div className="h-64 w-full">
                            {/* Chart would go here - using placeholder */}
                            <div className="w-full h-full bg-teal-50 rounded flex items-center justify-center">
                                <div className="relative w-full h-3/4">
                                    <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                                        <div className="w-1/7 h-1/2 bg-teal-300 mx-1"></div>
                                        <div className="w-1/7 h-3/5 bg-teal-300 mx-1"></div>
                                        <div className="w-1/7 h-2/5 bg-teal-300 mx-1"></div>
                                        <div className="w-1/7 h-3/5 bg-teal-300 mx-1"></div>
                                        <div className="w-1/7 h-1/3 bg-teal-300 mx-1"></div>
                                        <div className="w-1/7 h-4/5 bg-teal-300 mx-1"></div>
                                        <div className="w-1/7 h-3/4 bg-teal-300 mx-1"></div>
                                    </div>
                                    <div className="absolute inset-0 border-b border-l border-gray-200"></div>
                                    <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-500 pt-2">
                                        <span>Mon</span>
                                        <span>Tue</span>
                                        <span>Wed</span>
                                        <span>Thu</span>
                                        <span>Fri</span>
                                        <span>Sat</span>
                                        <span>Sun</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Department Status */}
                    <div className="bg-white rounded-lg shadow p-4">
                        <h2 className="text-lg font-semibold mb-4">Department Status</h2>
                        <div className="space-y-4">
                            {dashboardData.departments.map((dept, index) => (
                                <div key={index} className="space-y-1">
                                    <div className="flex justify-between text-sm">
                                        <span>{dept.name}</span>
                                        <span>{dept.status}/100</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div
                                            className="h-2.5 rounded-full"
                                            style={{
                                                width: `${dept.status}%`,
                                                backgroundColor: getStatusColor(dept.name)
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Staff Schedule */}
                <div className="bg-white rounded-lg shadow mb-6">
                    <div className="p-4 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold">Staff Schedule Overview</h2>
                            <div className="flex space-x-2">
                                <button className="px-3 py-1 text-sm rounded border border-gray-300">Day</button>
                                <button className="px-3 py-1 text-sm rounded bg-teal-500 text-white">Week</button>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                            <tr className="bg-gray-50">
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Staff Member</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shift</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {dashboardData.staffSchedule.map((staff) => (
                                <tr key={staff.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{staff.name}</div>
                                                <div className="text-sm text-gray-500">{staff.position}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staff.department}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staff.shift}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {staff.status}
                      </span>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Bottom Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {/* Recent Patients */}
                    <div className="bg-white rounded-lg shadow">
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                            <h2 className="text-lg font-semibold">Recent Patients</h2>
                            <a href="#" className="text-teal-500 text-sm">View all</a>
                        </div>
                        <div className="p-4">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                <tr>
                                    <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                                    <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                {dashboardData.recentPatients.map((patient, idx) => (
                                    <tr key={idx}>
                                        <td className="px-2 py-3">
                                            <div className="flex items-center">
                                                <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                                                <div className="ml-2">
                                                    <div className="text-sm font-medium">{patient.name}</div>
                                                    <div className="text-xs text-gray-500">#{patient.id}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-2 py-3">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            patient.status === 'Admitted' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {patient.status}
                        </span>
                                        </td>
                                        <td className="px-2 py-3 text-sm">
                                            Room {patient.room}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Upcoming Appointments */}
                    <div className="bg-white rounded-lg shadow">
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                            <h2 className="text-lg font-semibold">Upcoming Appointments</h2>
                            <a href="#" className="text-teal-500 text-sm">View all</a>
                        </div>
                        <div className="p-4 space-y-4">
                            {dashboardData.upcomingAppointments.map((appointment, idx) => (
                                <div key={idx} className="flex items-start space-x-3">
                                    <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                                    <div className="flex-1">
                                        <div className="text-sm font-medium">{appointment.doctorName}</div>
                                        <div className="text-xs text-gray-500">{appointment.specialty} • {appointment.time}</div>
                                    </div>
                                    <button className="px-2 py-1 text-xs bg-gray-100 rounded">Details</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Equipment Maintenance */}
                    <div className="bg-white rounded-lg shadow">
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                            <h2 className="text-lg font-semibold">Equipment Maintenance</h2>
                            <button className="text-teal-500 text-sm">Schedule Service</button>
                        </div>
                        <div className="p-4 space-y-4">
                            {dashboardData.equipment.map((item, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div className="flex justify-between items-start">
                                        <div className="text-sm font-medium">{item.name}</div>
                                        <span className={`px-2 text-xs leading-5 font-semibold rounded-full ${
                                            item.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                                        }`}>
                      {item.status}
                    </span>
                                    </div>
                                    <div className="text-xs text-gray-500">{item.maintenance}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Upcoming Surgeries & Procedures */}
                    <div className="bg-white rounded-lg shadow">
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                            <h2 className="text-lg font-semibold">Upcoming Surgeries & Procedures</h2>
                            <a href="#" className="text-teal-500 text-sm">View all</a>
                        </div>
                        <div className="p-4 space-y-4">
                            {dashboardData.surgeries.map((surgery, idx) => (
                                <div key={idx} className="space-y-1">
                                    <div className="text-sm font-medium">{surgery.procedure}</div>
                                    <div className="text-xs text-gray-500">{surgery.doctor} • {surgery.operating}</div>
                                    <div className="flex justify-between items-center">
                                        <div className="text-xs text-gray-500">{surgery.time}</div>
                                        <span className={`px-2 text-xs leading-5 font-semibold rounded-full ${
                                            surgery.status === 'Critical' ? 'bg-red-100 text-red-800' :
                                                surgery.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                                                    'bg-yellow-100 text-yellow-800'
                                        }`}>
                      {surgery.status}
                    </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Today's Statistics */}
                <h2 className="text-xl font-bold mb-4">Today's Statistics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    <StatCard
                        icon={<FaHeartbeat className="text-red-500" />}
                        title="Critical Care Today"
                        value={dashboardData.todaysStats.criticalCare}
                        color="bg-red-50"
                    />
                    <StatCard
                        icon={<FaBed className="text-blue-500" />}
                        title="Available ICUs"
                        value={dashboardData.todaysStats.availableICUs}
                        color="bg-blue-50"
                    />
                    <StatCard
                        icon={<FaNotesMedical className="text-purple-500" />}
                        title="Available Ventilators"
                        value={dashboardData.todaysStats.availableVentilators}
                        color="bg-purple-50"
                    />
                    <StatCard
                        icon={<FaWheelchair className="text-yellow-500" />}
                        title="Emergency Cases"
                        value={dashboardData.todaysStats.emergencyCases}
                        color="bg-yellow-50"
                    />
                    <StatCard
                        icon={<FaUserInjured className="text-green-500" />}
                        title="New Admissions"
                        value={dashboardData.todaysStats.newAdmissions}
                        color="bg-green-50"
                    />
                    <StatCard
                        icon={<FaUserInjured className="text-blue-500" />}
                        title="Discharges"
                        value={dashboardData.todaysStats.discharges}
                        color="bg-blue-50"
                    />
                    <StatCard
                        icon={<FaUserMd className="text-green-500" />}
                        title="Available Doctors"
                        value={dashboardData.todaysStats.availableDoctors}
                        color="bg-green-50"
                    />
                    <StatCard
                        icon={<FaCalendarCheck className="text-red-500" />}
                        title="Scheduled Surgeries"
                        value={dashboardData.todaysStats.scheduledSurgeries}
                        color="bg-red-50"
                    />
                </div>

                {/* Patient Demographics */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <h2 className="text-xl font-bold mb-6">Patient Demographics</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        {/* Age Distribution */}
                        <div>
                            <h3 className="text-md font-medium mb-4">Age Distribution</h3>
                            <div className="space-y-4">
                                {dashboardData.demographics.age.map((age, idx) => (
                                    <div key={idx} className="space-y-1">
                                        <div className="flex justify-between text-sm">
                                            <span>{age.range}</span>
                                            <span>{age.percentage}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="h-2 rounded-full bg-blue-400"
                                                style={{ width: `${age.percentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Gender Distribution */}
                        <div>
                            <h3 className="text-md font-medium mb-4">Gender Distribution</h3>
                            <div className="flex justify-center">
                                <div className="relative w-48 h-48">
                                    {/* Placeholder for pie chart */}
                                    <div className="flex items-center justify-center h-full">
                                        <div className="flex space-x-8">
                                            <div className="text-center">
                                                <div className="w-16 h-16 rounded-full bg-blue-500 mb-2 mx-auto"></div>
                                                <div className="text-lg font-bold text-blue-500">{dashboardData.demographics.gender.male}%</div>
                                                <div className="text-sm text-gray-500">Male</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="w-16 h-16 rounded-full bg-pink-500 mb-2 mx-auto"></div>
                                                <div className="text-lg font-bold text-pink-500">{dashboardData.demographics.gender.female}%</div>
                                                <div className="text-sm text-gray-500">Female</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Common Health Conditions */}
                    <div>
                        <h3 className="text-md font-medium mb-4">Common Health Conditions</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {dashboardData.demographics.commonConditions.map((condition, idx) => (
                                <div key={idx} className="text-center p-4 rounded-lg bg-gray-50">
                                    <div className={`text-2xl font-bold mb-2 ${
                                        idx === 0 ? 'text-blue-500' : idx === 1 ? 'text-green-500' : 'text-purple-500'
                                    }`}>
                                        {condition.percentage}%
                                    </div>
                                    <div className="text-gray-600">{condition.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 py-4">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                    <div>© 2024 MediCare Hospital. All rights reserved.</div>
                    <div className="flex space-x-4 mt-2 md:mt-0">
                        <a href="#" className="hover:text-teal-500">Privacy Policy</a>
                        <a href="#" className="hover:text-teal-500">Terms of Service</a>
                        <a href="#" className="hover:text-teal-500">Contact Support</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// Component for dashboard cards
function DashboardCard({ icon, title, value, className = '' }) {
    return (
        <div className={`bg-white rounded-lg shadow p-6 ${className}`}>
            <div className="flex items-center">
                <div className="bg-gray-100 rounded-full p-3 mr-4">
                    {icon}
                </div>
                <div>
                    <div className="text-sm text-gray-500">{title}</div>
                    <div className="text-2xl font-bold">{value}</div>
                </div>
            </div>
        </div>
    );
}

// Component for statistics cards
function StatCard({ icon, title, value, color = 'bg-gray-50' }) {
    return (
        <div className="bg-white rounded-lg shadow p-4">
            <div className="flex">
                <div className={`${color} rounded-lg p-4 mr-4`}>
                    {icon}
                </div>
                <div>
                    <div className="text-2xl font-bold">{value}</div>
                    <div className="text-sm text-gray-500">{title}</div>
                </div>
            </div>
        </div>
    );
}

// Helper function to get status color
function getStatusColor(department) {
    switch(department) {
        case 'Emergency': return '#ff5a5a';
        case 'Surgery': return '#ffba5a';
        case 'ICU': return '#5aff5a';
        case 'Pediatrics': return '#5a9fff';
        case 'Cardiology': return '#c45aff';
        case 'Neurology': return '#9f5aff';
        default: return '#5ab5ff';
    }
}