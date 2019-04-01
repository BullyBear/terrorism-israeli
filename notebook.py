Jupyter Notebook
cleaner.py
Last Checkpoint: 01/31/2019
(autosaved)
Current Kernel Logo
Python 3 
File
Edit
View
Insert
Cell
Kernel
Widgets
Help

import numpy as np
import pandas as pd
from pandas import Series, DataFrame 
import matplotlib.pyplot as plt
plt.style.use('fivethirtyeight')
import re
import seaborn as sns
from scipy import stats
from scipy.stats import norm
from sklearn.preprocessing import StandardScaler
%matplotlib inline
df_1 = pd.read_csv('/Users/WilliamStevens/Documents/deplorable_snowflake/ds/static/data/israel/israel_terrorism_new.csv')
#print(df_1.head())
#print(df_1.shape)
#print(df_1.dtypes)
#print(df_1.info())
print(df_1.describe(include=['object']))
           DATE                      REGION COUNTRY       CITY  \
count      4113                        4113    4113       4113   
unique     2723                          11      66        863   
top     9/20/72  Middle East & North Africa  Israel  Jerusalem   
freq         26                        3877    2183        588   

       PERPETRATOR GROUP        ATTACK TYPE                WEAPON TYPE  \
count               4113               4113                       4113   
unique               250                 25                         53   
top              Unknown  Bombing/Explosion  Explosives/Bombs/Dynamite   
freq                1303               2169                       2169   

                        TARGET TYPE FATALITIES INJURED  
count                          4113       4113    4113  
unique                           64         37      75  
top     Private Citizens & Property          0       0  
freq                           1666       2549    2255  
df_1.isnull().sum()
#null_data = df_1[df_1.isnull().any(axis=1)]
#print(null_data)
Unnamed: 0             0
GTD ID                 0
DATE                   0
REGION                 0
COUNTRY                0
CITY                   0
Latitude             509
Longitude            509
PERPETRATOR GROUP      0
ATTACK TYPE            0
WEAPON TYPE            0
TARGET TYPE            0
FATALITIES             0
INJURED                0
dtype: int64
df_1['DATE'] = pd.to_datetime(df_1['DATE'], errors = 'coerce')
print(df_1['DATE'].head())
0   2017-12-29
1   2017-12-29
2   2017-12-29
3   2017-12-17
4   2017-12-16
Name: DATE, dtype: datetime64[ns]
df_1[(df_1['FATALITIES'].str.contains('Unknown', na=False))].count()
df_1[(df_1['INJURED'].str.contains('Unknown', na=False))].count() 
Unnamed: 0           292
GTD ID               292
DATE                 292
REGION               292
COUNTRY              292
CITY                 292
Latitude             264
Longitude            264
PERPETRATOR GROUP    292
ATTACK TYPE          292
WEAPON TYPE          292
TARGET TYPE          292
FATALITIES           292
INJURED              292
dtype: int64
def clean(row):
    fatalities_revised = row['FATALITIES']
    fatalities_revised = str(fatalities_revised)
    #fatalities_revised = re.sub('Unknown', '', fatalities_revised)
    fatalities_revised = np.array(fatalities_revised)
    fatalities_revised[fatalities_revised == 'Unknown'] = 0
    injured_revised = row['INJURED']
    injured_revised = str(injured_revised)
    #injured_revised = re.sub('Unknown', '', injured_revised)
    injured_revised = np.array(injured_revised)
    injured_revised[injured_revised == 'Unknown'] = 0
    
    return pd.Series([fatalities_revised, injured_revised])
df_1['FATALITIES'] = df_1.apply(clean, axis=1)
df_1[(df_1['FATALITIES'].str.contains('Unknown', na=False))].count()
Unnamed: 0           0
GTD ID               0
DATE                 0
REGION               0
COUNTRY              0
CITY                 0
Latitude             0
Longitude            0
PERPETRATOR GROUP    0
ATTACK TYPE          0
WEAPON TYPE          0
TARGET TYPE          0
FATALITIES           0
INJURED              0
dtype: int64
df_1['INJURED'] = df_1.apply(clean, axis=1)
df_1[(df_1['INJURED'].str.contains('Unknown', na=False))].count()
Unnamed: 0           0
GTD ID               0
DATE                 0
REGION               0
COUNTRY              0
CITY                 0
Latitude             0
Longitude            0
PERPETRATOR GROUP    0
ATTACK TYPE          0
WEAPON TYPE          0
TARGET TYPE          0
FATALITIES           0
INJURED              0
dtype: int64
id = df_1['GTD ID']
date = df_1['DATE']
country = df_1['COUNTRY']
city = df_1['CITY'] 
latitude = df_1['Latitude']
longitude = df_1['Longitude']
perpetrator_group = df_1['PERPETRATOR GROUP']
fatalities_revised = df_1['FATALITIES']
injured_revised = df_1['INJURED']
target_type = df_1['TARGET TYPE']
region = df_1['REGION']
attack_type = df_1['ATTACK TYPE']
weapon_type = df_1['WEAPON TYPE']
df_1['FATALITIES'] = df_1['FATALITIES'].astype(int)
np.mean(df_1['FATALITIES'])
0.8601993678580112
df_1['COUNTRY'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x11b9f4278>

df_1['CITY'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x1201765c0>

df_1['PERPETRATOR GROUP'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x121349588>

df_1['ATTACK TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x120c7c1d0>

df_1['WEAPON TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x120d73f60>

df_1['TARGET TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x120ff44e0>

df_1[(df_1['PERPETRATOR GROUP'].str.contains('Palestinians'))]['ATTACK TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x1206f1dd8>

df_1[(df_1['PERPETRATOR GROUP'].str.contains('Palestinians'))]['WEAPON TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x120fafe10>

df_1[(df_1['PERPETRATOR GROUP'].str.contains('Palestinian Extremists'))]['ATTACK TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x121231940>

df_1[(df_1['PERPETRATOR GROUP'].str.contains('Palestinian Extremists'))]['WEAPON TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x120ae8b70>

df_1[(df_1['PERPETRATOR GROUP'].str.contains('Hamas \(Islamic Resistance Movement\)'))]['ATTACK TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x120c12e10>

df_1[(df_1['PERPETRATOR GROUP'].str.contains('Hamas \(Islamic Resistance Movement\)'))]['WEAPON TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x120cb4f98>

df_1[(df_1['PERPETRATOR GROUP'].str.contains('Palestinian Islamic Jihad \(PIJ\) '))]['ATTACK TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x120db3ba8>

df_1[(df_1['PERPETRATOR GROUP'].str.contains('Palestinian Islamic Jihad \(PIJ\) '))]['WEAPON TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x120d50860>

df_1[(df_1['PERPETRATOR GROUP'].str.contains('Palestine Liberation Organization \(PLO\)'))]['ATTACK TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x120e0d908>

df_1[(df_1['PERPETRATOR GROUP'].str.contains('Palestine Liberation Organization \(PLO\)'))]['WEAPON TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x120f818d0>

df_1[(df_1['PERPETRATOR GROUP'].str.contains('Hezbollah'))]['ATTACK TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x121027a20>

df_1[(df_1['PERPETRATOR GROUP'].str.contains('Hezbollah'))]['WEAPON TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x1210c2cc0>

df_1[(df_1['PERPETRATOR GROUP'].str.contains('Al-Aqsa Martyrs Brigade '))]['ATTACK TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x10fad1d68>

df_1[(df_1['PERPETRATOR GROUP'].str.contains('Al-Aqsa Martyrs Brigade '))]['WEAPON TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x1206a65c0>

df_1[(df_1['PERPETRATOR GROUP'].str.contains('Popular Front for the Liberation of Palestine \(PFLP\)'))]['ATTACK TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x121f406d8>

df_1[(df_1['PERPETRATOR GROUP'].str.contains('Popular Front for the Liberation of Palestine \(PFLP\)'))]['WEAPON TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x12205d6a0>

df_1[(df_1['PERPETRATOR GROUP'].str.contains('Black September'))]['ATTACK TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x12215b978>

df_1[(df_1['PERPETRATOR GROUP'].str.contains('Black September'))]['WEAPON TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x12227b3c8>

df_1[(df_1['CITY'].str.contains('Jerusalem', na=False))]['ATTACK TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x12236c6a0>

df_1[(df_1['CITY'].str.contains('Jerusalem', na=False))]['WEAPON TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x122437198>

df_1[(df_1['CITY'].str.contains('Tel Aviv', na=False))]['ATTACK TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x122562668>

df_1[(df_1['CITY'].str.contains('Tel Aviv', na=False))]['WEAPON TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x12268b1d0>

df_1[(df_1['CITY'].str.contains('Gaza', na=False))]['ATTACK TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x1227951d0>

df_1[(df_1['CITY'].str.contains('Gaza', na=False))]['WEAPON TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x12289e860>

df_1[(df_1['CITY'].str.contains('Hebron', na=False))]['ATTACK TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x1229a2748>

df_1[(df_1['CITY'].str.contains('Hebron', na=False))]['WEAPON TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x122aae6d8>

df_1[(df_1['CITY'].str.contains('Ashkelon', na=False))]['ATTACK TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x122bbe898>

df_1[(df_1['CITY'].str.contains('Ashkelon', na=False))]['WEAPON TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x122cca828>

df_1[(df_1['CITY'].str.contains('Sderot', na=False))]['ATTACK TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x122da34a8>

df_1[(df_1['CITY'].str.contains('Sderot', na=False))]['WEAPON TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x122e51390>

df_1[(df_1['CITY'].str.contains('Nablus', na=False))]['ATTACK TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x122e835f8>

df_1[(df_1['CITY'].str.contains('Nablus', na=False))]['WEAPON TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x122fe7128>

df_1[(df_1['CITY'].str.contains('Eshkol regional council', na=False))]['ATTACK TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x1230e56d8>

df_1[(df_1['CITY'].str.contains('Eshkol regional council', na=False))]['WEAPON TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x1231e4358>

df_1[(df_1['CITY'].str.contains('Ashdod', na=False))]['ATTACK TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x1232b5128>

df_1[(df_1['CITY'].str.contains('Ashdod', na=False))]['WEAPON TYPE'].value_counts()[:10].plot(kind='barh')
<matplotlib.axes._subplots.AxesSubplot at 0x12338b278>

​
df_1[(df_1['PERPETRATOR GROUP'].str.contains('Hamas \(Islamic Resistance Movement\)')) & (df_1['DATE'] >= '1978-01-01') & (df_1['DATE'] <= '1997-12-31')]['ATTACK TYPE'].value_counts()[:10]
Assassination                  19
Bombing/Explosion              14
Armed Assault                  14
Unknown                         3
Hostage Taking (Kidnapping)     3
Unarmed Assault                 1
Name: ATTACK TYPE, dtype: int64
df_1[(df_1['PERPETRATOR GROUP'].str.contains('Hamas \(Islamic Resistance Movement\)')) & (df_1['DATE'] >= '1998-01-01') & (df_1['DATE'] <= '2017-12-31')]['ATTACK TYPE'].value_counts()[:10]
Bombing/Explosion                                212
Armed Assault                                     45
Bombing/Explosion,Armed Assault                   10
Unarmed Assault                                    6
Hostage Taking (Kidnapping)                        5
Armed Assault,Bombing/Explosion                    3
Hostage Taking (Kidnapping),Armed Assault          2
Bombing/Explosion,Armed Assault,Armed Assault      1
Bombing/Explosion,Assassination                    1
Name: ATTACK TYPE, dtype: int64
df_1[(df_1['PERPETRATOR GROUP'].str.contains('Palestinians')) & (df_1['DATE'] >= '1978-01-01') & (df_1['DATE'] <= '1997-12-31')]['ATTACK TYPE'].value_counts()[:10]
Bombing/Explosion                      331
Assassination                          241
Armed Assault                          100
Hostage Taking (Kidnapping)             23
Facility/Infrastructure Attack          22
Unarmed Assault                         16
Unknown                                 10
Hostage Taking (Barricade Incident)      2
Hijacking                                1
Name: ATTACK TYPE, dtype: int64
df_1[(df_1['PERPETRATOR GROUP'].str.contains('Palestinians')) & (df_1['DATE'] >= '1998-01-01') & (df_1['DATE'] <= '2017-12-31')]['ATTACK TYPE'].value_counts()[:10]
Armed Assault        17
Bombing/Explosion     3
Assassination         1
Name: ATTACK TYPE, dtype: int64
df_1[(df_1['PERPETRATOR GROUP'].str.contains('Palestinian Extremists')) & (df_1['DATE'] >= '1978-01-01') & (df_1['DATE'] <= '1997-12-31')]['ATTACK TYPE'].value_counts()[:10]
Assassination    4
Name: ATTACK TYPE, dtype: int64
df_1[(df_1['PERPETRATOR GROUP'].str.contains('Palestinian Extremists')) & (df_1['DATE'] >= '1998-01-01') & (df_1['DATE'] <= '2017-12-31')]['ATTACK TYPE'].value_counts()[:10]
Armed Assault                      284
Bombing/Explosion                   43
Unarmed Assault                     41
Facility/Infrastructure Attack      10
Bombing/Explosion,Armed Assault      2
Assassination                        2
Name: ATTACK TYPE, dtype: int64
df_1[(df_1['PERPETRATOR GROUP'].str.contains('Palestinian Islamic Jihad \(PIJ\)')) & (df_1['DATE'] >= '1978-01-01') & (df_1['DATE'] <= '1997-12-31')]['ATTACK TYPE'].value_counts()[:10]
Assassination        11
Bombing/Explosion     3
Armed Assault         1
Name: ATTACK TYPE, dtype: int64
df_1[(df_1['PERPETRATOR GROUP'].str.contains('Palestinian Islamic Jihad \(PIJ\)')) & (df_1['DATE'] >= '1998-01-01') & (df_1['DATE'] <= '2017-12-31')]['ATTACK TYPE'].value_counts()[:10]
Bombing/Explosion                                    164
Armed Assault                                         24
Bombing/Explosion,Armed Assault                        6
Armed Assault,Bombing/Explosion                        2
Armed Assault,Hostage Taking (Barricade Incident)      1
Name: ATTACK TYPE, dtype: int64
df_1[(df_1['PERPETRATOR GROUP'].str.contains('Palestine Liberation Organization \(PLO\)')) & (df_1['DATE'] >= '1978-01-01') & (df_1['DATE'] <= '1997-12-31')]['ATTACK TYPE'].value_counts()[:10]
Bombing/Explosion                                   83
Armed Assault                                       30
Assassination                                        9
Facility/Infrastructure Attack                       3
Bombing/Explosion,Facility/Infrastructure Attack     1
Name: ATTACK TYPE, dtype: int64
df_1[(df_1['PERPETRATOR GROUP'].str.contains('Palestine Liberation Organization \(PLO\)')) & (df_1['DATE'] >= '1998-01-01') & (df_1['DATE'] <= '2017-12-31')]['ATTACK TYPE'].value_counts()[:10]
Series([], Name: ATTACK TYPE, dtype: int64)
df_1[(df_1['PERPETRATOR GROUP'].str.contains('Hezbollah')) & (df_1['DATE'] >= '1978-01-01') & (df_1['DATE'] <= '1997-12-31')]['ATTACK TYPE'].value_counts()[:10]
Bombing/Explosion              51
Armed Assault                  10
Unknown                         1
Hostage Taking (Kidnapping)     1
Name: ATTACK TYPE, dtype: int64
df_1[(df_1['PERPETRATOR GROUP'].str.contains('Hezbollah')) & (df_1['DATE'] >= '1998-01-01') & (df_1['DATE'] <= '2017-12-31')]['ATTACK TYPE'].value_counts()[:10]
Bombing/Explosion                                61
Armed Assault                                    10
Bombing/Explosion,Armed Assault                   3
Armed Assault,Bombing/Explosion                   3
Unknown                                           2
Hostage Taking (Kidnapping),Bombing/Explosion     1
Hostage Taking (Kidnapping),Armed Assault         1
Hostage Taking (Kidnapping)                       1
Name: ATTACK TYPE, dtype: int64
df_1[(df_1['PERPETRATOR GROUP'].str.contains('Al-Aqsa Martyrs Brigade')) & (df_1['DATE'] >= '1978-01-01') & (df_1['DATE'] <= '1997-12-31')]['ATTACK TYPE'].value_counts()[:10]
Series([], Name: ATTACK TYPE, dtype: int64)
df_1[(df_1['PERPETRATOR GROUP'].str.contains('Al-Aqsa Martyrs Brigade')) & (df_1['DATE'] >= '1998-01-01') & (df_1['DATE'] <= '2017-12-31')]['ATTACK TYPE'].value_counts()[:10]
Bombing/Explosion                                90
Armed Assault                                    63
Bombing/Explosion,Armed Assault                   6
Armed Assault,Bombing/Explosion                   3
Assassination                                     2
Hostage Taking (Kidnapping),Armed Assault         2
Unarmed Assault                                   2
Bombing/Explosion,Armed Assault,Armed Assault     1
Hostage Taking (Kidnapping)                       1
Unknown                                           1
Name: ATTACK TYPE, dtype: int64
df_1[(df_1['PERPETRATOR GROUP'].str.contains('Popular Front for the Liberation of Palestine \(PFLP\)')) & (df_1['DATE'] >= '1978-01-01') & (df_1['DATE'] <= '1997-12-31')]['ATTACK TYPE'].value_counts()[:10]
Bombing/Explosion                 11
Assassination                      7
Armed Assault                      7
Hostage Taking (Kidnapping)        1
Facility/Infrastructure Attack     1
Name: ATTACK TYPE, dtype: int64
df_1[(df_1['PERPETRATOR GROUP'].str.contains('Popular Front for the Liberation of Palestine \(PFLP\)')) & (df_1['DATE'] >= '1998-01-01') & (df_1['DATE'] <= '2017-12-31')]['ATTACK TYPE'].value_counts()[:10]
Bombing/Explosion                                   52
Armed Assault                                       12
Unknown                                              1
Unarmed Assault                                      1
Assassination                                        1
Bombing/Explosion,Facility/Infrastructure Attack     1
Name: ATTACK TYPE, dtype: int64
df_1[(df_1['PERPETRATOR GROUP'].str.contains('Black September')) & (df_1['DATE'] >= '1978-01-01') & (df_1['DATE'] <= '1997-12-31')]['ATTACK TYPE'].value_counts()[:10]
Series([], Name: ATTACK TYPE, dtype: int64)
df_1[(df_1['PERPETRATOR GROUP'].str.contains('Black September')) & (df_1['DATE'] >= '1998-01-01') & (df_1['DATE'] <= '2017-12-31')]['ATTACK TYPE'].value_counts()[:10]
Series([], Name: ATTACK TYPE, dtype: int64)
df_1[(df_1['PERPETRATOR GROUP'].str.contains('Unknown')) & (df_1['DATE'] >= '1978-01-01') & (df_1['DATE'] <= '1997-12-31')]['ATTACK TYPE'].value_counts()[:10]
Bombing/Explosion                      234
Armed Assault                           76
Assassination                           53
Facility/Infrastructure Attack          25
Unarmed Assault                          9
Unknown                                  5
Hostage Taking (Kidnapping)              4
Hostage Taking (Barricade Incident)      1
Name: ATTACK TYPE, dtype: int64
df_1[(df_1['PERPETRATOR GROUP'].str.contains('Unknown')) & (df_1['DATE'] >= '1998-01-01') & (df_1['DATE'] <= '2017-12-31')]['ATTACK TYPE'].value_counts()[:10]
Bombing/Explosion                            595
Armed Assault                                202
Facility/Infrastructure Attack                39
Assassination                                 13
Unarmed Assault                               10
Hostage Taking (Kidnapping)                    4
Bombing/Explosion,Armed Assault                3
Unknown                                        3
Armed Assault,Bombing/Explosion                3
Hostage Taking (Kidnapping),Armed Assault      2
Name: ATTACK TYPE, dtype: int64
​
​
df_1[(df_1['FATALITIES']).nlargest(10)['CITY']
  File "<ipython-input-492-6ec250627209>", line 1
    df_1[(df_1['FATALITIES']).nlargest(10)['CITY']
                                                  ^
SyntaxError: unexpected EOF while parsing


#pd.crosstab(df_1['CITY'].str.contains('Jerusalem'), df_1['ATTACK TYPE'].str.contains('Bombing/Explosion'), margins=True)
#df_1.loc[df_1['FATALITIES'].idxmax()]
#by_method = df_1['FATALITIES'].nlargest(10).plot(kind='barh')
#df_1.ix[420]
Unnamed: 0                                                        3568
GTD ID                                                    198211110015
DATE                                               1982-11-11 00:00:00
REGION                                      Middle East & North Africa
COUNTRY                                                        Lebanon
CITY                                                     Tyre district
Latitude                                                       42.9933
Longitude                                                     -76.8057
PERPETRATOR GROUP    Armed Struggle Organization (suspected),Lebane...
ATTACK TYPE                                          Bombing/Explosion
WEAPON TYPE                                  Explosives/Bombs/Dynamite
TARGET TYPE                                                   Military
FATALITIES                                                          90
INJURED                                                             90
Name: 3568, dtype: object
​
​
​
​
​
​
