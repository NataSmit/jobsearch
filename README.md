# Job Search

Учебный проект выполнен в рамках React-интенсива компании Aston.

Реализованы следующие требования к функциональности:

## 1 уровень (необходимый минимум)

### React

---

- Пишем функциональные компоненты c хуками в приоритете над классовыми. ☑️ 

- Есть четкое разделение компонентов на [умные](src/pages/Main/Main.tsx) - и [глупые](src/components/Layout/Layout.tsx) ☑️

- Есть рендеринг списков [страница поиска](src/pages/SearchPage/SearchPage.tsx) ☑️

- Реализована хотя бы одна [форма](src/pages/Login/Login.tsx) ☑️

- Есть применение Контекст API [current user](src/contexts/CurrentUserContext.ts) ☑️

- Есть [применение](src/components/Layout/Layout.tsx) [предохранителя](src/components/ErrorFallback.tsx) ☑️

- Есть хотя бы один кастомный хук [useCurrentUserFavorites](src/hooks/useCurrentUserFavorites.ts) ☑️

- Хотя бы несколько компонентов используют PropTypes [JobAdCard](src/components/JobAdCard/JobAdCard.tsx) [SearchForm](src/components/SearchForm/SearchForm.tsx) ☑️

- Поиск не должен триггерить много запросов к серверу. [useDebounce](src/hooks/useDebounce.ts) ☑️

- Есть применение [lazy + Suspense](src/components/Layout/Layout.tsx) ☑️

### Redux

---

- Используем Modern Redux with Redux Toolkit ☑️

- Используем [слайсы](src/redux/historySlice.ts) ☑️

- Есть хотя бы одна кастомная [мидлвара](src/redux/manageLSMiddleware.ts) ☑️

- Используется [RTK Query](src/redux/jobAdsApi.ts) ☑️

- Используется [Transforming Responses](src/redux/jobAdsApi.ts) ☑️

### 2 уровень (необязательный)  

- Использование [TypeScript](tsconfig.json)
