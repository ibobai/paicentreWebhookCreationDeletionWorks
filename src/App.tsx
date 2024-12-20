import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { MainLayout } from './components/layout/MainLayout';
import { Dashboard } from './components/Dashboard';
import { PaymentTable } from './components/PaymentTable';
import { PaymentSummary } from './components/PaymentSummary';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { SettingsPage } from './pages/SettingsPage';
import { DataManagementPage } from './pages/settings/DataManagementPage';
import { WebhooksPage } from './pages/settings/WebhooksPage';
import { EventsPage } from './pages/events/EventsPage';
import { ProfilePage } from './pages/ProfilePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CentralizedManagementPage } from './pages/features/CentralizedManagement';
import { AutomatedReportsPage } from './pages/features/AutomatedReports';
import { RealtimeUpdatesPage } from './pages/features/RealtimeUpdates';
import { PlatformIntegrationPage } from './pages/features/PlatformIntegration';
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AdminUsersPage } from './pages/admin/UsersPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AuthProvider } from './contexts/AuthContext';
import { AdminProvider } from './contexts/AdminContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { CurrencyProvider } from './contexts/CurrencyContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { ProtectedAdminRoute } from './components/auth/ProtectedAdminRoute';
import { mockPayments } from './data/mockPayments';

export default function App() {
  return (
    <AuthProvider>
      <AdminProvider>
        <LanguageProvider>
          <CurrencyProvider>
            <BrowserRouter>
              <Toaster position="top-right" />
              <Routes>
                {/* Regular application routes */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                  path="/"
                  element={
                    <MainLayout>
                      <Dashboard />
                    </MainLayout>
                  }
                />
                <Route
                  path="/home"
                  element={
                    <MainLayout>
                      <Dashboard />
                    </MainLayout>
                  }
                />
                <Route
                  path="/payments"
                  element={
                    <ProtectedRoute>
                      <MainLayout>
                        <div className="space-y-6">
                          <PaymentSummary payments={mockPayments} />
                          <PaymentTable payments={mockPayments} />
                        </div>
                      </MainLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/settings"
                  element={
                    <ProtectedRoute>
                      <MainLayout>
                        <SettingsPage />
                      </MainLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/settings/data"
                  element={
                    <ProtectedRoute>
                      <MainLayout>
                        <DataManagementPage />
                      </MainLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/settings/webhooks"
                  element={
                    <ProtectedRoute>
                      <MainLayout>
                        <WebhooksPage />
                      </MainLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/settings/events"
                  element={
                    <ProtectedRoute>
                      <MainLayout>
                        <EventsPage />
                      </MainLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <MainLayout>
                        <ProfilePage />
                      </MainLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <MainLayout>
                      <AboutPage />
                    </MainLayout>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <MainLayout>
                      <ContactPage />
                    </MainLayout>
                  }
                />
                <Route
                  path="/features/centralized-management"
                  element={
                    <MainLayout>
                      <CentralizedManagementPage />
                    </MainLayout>
                  }
                />
                <Route
                  path="/features/automated-reports"
                  element={
                    <MainLayout>
                      <AutomatedReportsPage />
                    </MainLayout>
                  }
                />
                <Route
                  path="/features/realtime-updates"
                  element={
                    <MainLayout>
                      <RealtimeUpdatesPage />
                    </MainLayout>
                  }
                />
                <Route
                  path="/features/platform-integration"
                  element={
                    <MainLayout>
                      <PlatformIntegrationPage />
                    </MainLayout>
                  }
                />

                {/* Secret admin routes */}
                <Route path="/boss/kho/logy" element={<AdminLoginPage />} />
                <Route
                  path="/admin/users"
                  element={
                    <ProtectedAdminRoute>
                      <AdminUsersPage />
                    </ProtectedAdminRoute>
                  }
                />

                {/* 404 route */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </BrowserRouter>
          </CurrencyProvider>
        </LanguageProvider>
      </AdminProvider>
    </AuthProvider>
  );
}